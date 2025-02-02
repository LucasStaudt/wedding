import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaGift, FaCopy } from "react-icons/fa";
import qrCodeImage from "../assets/qrcode-pix.png"; // Replace with your actual QR code image
import { gifts } from "../helpers/linksHelper";

export default function Presentes() {
  const [copied, setCopied] = useState(false);
  const pixKey = "00020126330014BR.GOV.BCB.PIX0114+55819999999952040000530398654041.005802BR5920Casal Exemplo6009SAO PAULO"; // Replace with your actual Pix key

  const copyToClipboard = () => {
    navigator.clipboard.writeText(pixKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="container mx-auto p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">Lista de Presentes 🎁</h1>
      <p className="text-lg text-gray-600 mb-4">
        Caso queira nos presentear, fique à vontade para contribuir com o valor de algum presente abaixo!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
        {gifts.map((gift) => (
          <Card key={gift.id} className="p-4 flex flex-col items-center shadow-lg">
            <FaGift className="text-pink-500 text-4xl mb-2" />
            <CardContent className="text-xl font-semibold">{gift.name}</CardContent>
            <p className="text-gray-500 text-lg">{gift.amount}</p>
          </Card>
        ))}
      </div>
      <h2 className="text-2xl font-semibold mb-4">Faça sua contribuição via Pix 💖</h2>
      <img src={qrCodeImage} alt="QR Code Pix" className="w-48 mx-auto mb-4 border rounded-lg" />
      <p className="text-gray-500 mb-2">Ou copie a chave Pix abaixo:</p>
      <div className="flex justify-center items-center gap-2 bg-gray-100 p-3 rounded-lg">
        <span className="text-gray-700 text-sm break-all">{pixKey}</span>
        <Button onClick={copyToClipboard} size="sm" variant="outline" className="flex items-center">
          <FaCopy className="mr-1" /> {copied ? "Copiado!" : "Copiar"}
        </Button>
      </div>
    </div>
  );
}
