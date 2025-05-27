import React from 'react';
import Image from 'next/image';

export default function OPCExamPage({ params }) {
    const { id } = params;
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header Image */}
            <div className="relative w-full h-64">
                <Image
                    src="/img/thumbnail.jpg"
                    alt="OPC Exam"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-b"
                />
                <div className="absolute bottom-4 left-6 text-white">
                    <h1 className="text-2xl md:text-4xl font-bold">Examen de l'OPC</h1>
                    <p className="text-lg">Pour les conseillers en voyages</p>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-6 md:py-10">
                <h2 className="text-xl font-semibold mb-4">
                   Professionnels du voyage – Examen de l&apos;OPC pour les conseillers en voyages (en ligne)
                </h2>

                {/* Description Section */}
                    <section className="space-y-4 text-sm md:text-base">
                        <p className="font-bold">Passez votre examen de l&apos;OPC dans le confort de votre foyer.</p>
                        <p>
                            Comme l&apos;exige la Loi sur les agents de voyages, les professionnels du voyage doivent réussir un examen
                            et obtenir une certification de l&apos;Office de la protection du consommateur (OPC) afin de pouvoir
                            exercer dans ce domaine.
                        </p>

                        <p>
                            Le Centre d&apos;expertise de l&apos;ITHQ a été mandaté par l&apos;OPC pour faire passer cet examen.
                            Il offre aussi des outils pour bien s&apos;y préparer.
                        </p>

                        <h3 className="font-semibold">Cet examen s&apos;adresse :</h3>
                        <p>À celles et ceux qui souhaitent devenir conseillers en voyages.</p>

                        <h3 className="font-semibold">Modalités</h3>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700">
                            <li>Créer votre dossier en ligne sur le site de l&apos;OPC avant l&apos;inscription.</li>
                            <li>L&apos;examen est surveillé en ligne (vidéo et audio).</li>
                            <li>Durée : environ 60 minutes, 35 questions.</li>
                            <li>Score de passage : 65%.</li>
                            <li className="text-red-600 font-medium">
                            Incompatible avec mobile, tablette, Chromebook ou Surface.
                            </li>
                        </ul>

                        <h3 className="font-semibold">Objectives</h3>
                        <ul className="list-decimal pl-6 space-y-1 text-gray-700">
                            <li>Créez un CCV sur le site de l&apos;Office de la protection du consommateur.</li>
                            <li>Effectuez l&apos;achat et suivez les instructions par email.</li>
                            <li>Une fois le paiement fait, attendez que le bouton &quot;Lancer&quot; devienne actif.</li>
                        </ul>
                    </section>
                            {/* Manual Card */}
                <div className="my-8">
                <div className="p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                    <p className="font-semibold">Manuel à l&apos;intention des professionnels du voyage</p>
                    <p className="text-sm text-gray-600">Téléchargez-le gratuitement</p>
                    </div>
                    <button>Download</button>
                </div>
                </div>
                    {/* Activities Section */}
                <div className="space-y-4">
                <h3 className="font-semibold text-lg mb-2">À compléter AVANT de débuter l&apos;examen</h3>
                {[
                    { title: 'Lois et règlements applicables au secteur du VOYAGE', type: 'Launch' },
                    { title: "Simulateur d'examen - Conseillers voyages", type: 'Launch' },
                    { title: "Avis et consentement à l'enregistrement de la séance d'examen", type: 'Launch' },
                    { title: "Guide de l'utilisateur - Examen sous surveillance", type: 'Download' },
                    { title: 'Informations importantes concernant la supervision', type: 'Download' },
                    {
                    title: 'Examen pour conseiller en voyages',
                    type: 'Launch',
                    score: '68.57%',
                    status: 'Proctored: Valid'
                    },
                ].map((item, i) => (
                    <div key={i} className="p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                        <p className="font-medium">{item.title}</p>
                        {item.score && (
                        <p className="text-sm text-green-700 mt-1">
                            Score obtenu : <span className="font-bold">{item.score}</span>{' '}
                            {item.status && <span className="ml-2 text-green-600">({item.status})</span>}
                        </p>
                        )}
                    </div>
                    <button>{item.type}</button>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}