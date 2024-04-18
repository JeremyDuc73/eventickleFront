import { useRef, useEffect, useState } from 'react';
import axiosInstance from "../auth/interceptor.ts"; // Importer l'intercepteur Axios
import jsQR from 'jsqr';
import { GlobalConstants } from "../common/global-constants.ts";
import {useNavigate} from "react-router-dom";

export default function Scan() {
    const videoRef = useRef<HTMLVideoElement>(null); // Définir le type de référence vidéo
    const canvasRef = useRef<HTMLCanvasElement>(null); // Définir le type de référence canvas
    const [qrContent, setQRContent] = useState<string | null>(null); // Spécifier le type de qrContent
    const navigate = useNavigate();

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (error) {
            console.error('Impossible d\'accéder à la caméra : ', error);
        }
    };

    const handleScan = () => {
        if (canvasRef.current && videoRef.current) {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            if (context) {
                context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
                const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
                const code = jsQR(imageData.data, imageData.width, imageData.height);
                if (code) {
                    setQRContent(code.data);
                }
            }
        }
    };

    const handleRetrieveQRContent = async () => {
        try {
            if (qrContent) {
                const response = await axiosInstance.get(`${GlobalConstants.baseUrl}routeici${qrContent}`);
                console.log("Réponse de la requête GET:", response.data);

                console.log("ID du produit récupéré:", response.data);
                if (response.data) {
                    await addProduct(response.data);
                } else {
                    console.error("ID du produit non trouvé dans la réponse:", response.data);
                }
            }
        } catch (error) {
            console.error("Une erreur s'est produite lors de la récupération du panier :", error);
        }
    };


    const addProduct = async (productId: string) => { // Spécifier le type du paramètre productId
        try {
            const response = await axiosInstance.post(`${GlobalConstants.baseUrl}/api/order/add/${productId}`);
            console.log(response.data);
            navigate("/cart");
        } catch (error) {
            console.error("Une erreur s'est produite lors de l'ajout d'un élément au panier :", error);
        }
    };

    useEffect(() => {
        const interval = setInterval(handleScan, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="scan-container">
            <button className="scan-button" onClick={startCamera}>Ouvrir la caméra</button>
            <div className="video-container">
                <video ref={videoRef} className="video" autoPlay></video>
                <canvas ref={canvasRef} className="canvas"></canvas>
            </div>
            {qrContent && (
                <div className="qr-content">
                    <p>Contenu du QR code :</p>
                    <p>{qrContent}</p>
                    <button className="btn btn-success" onClick={handleRetrieveQRContent}>Récupérer le contenu</button>
                </div>
            )}
        </div>
    );
}