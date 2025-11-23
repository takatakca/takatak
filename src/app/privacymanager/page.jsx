
"use client";

import React, { useState } from "react";
import styles from "./page.module.css";

export default function PrivacyManagerPage() {
  const [serviceTab, setServiceTab] = useState("customers");

  return (
    <div className={styles.root}>
      {/* Top Header */}
      <div className={styles.topHeader}>
        <div className={styles.headerContainer}>
          <div className={styles.logoSection}>
            <a href="/" className={styles.logo}>
              TAKATAK
            </a>
            <button className={styles.exploreBtn}>Explore ▼</button>
          </div>

          <div className={styles.headerActions}>
            <a href="#" className={styles.loginLink}>
              Login
            </a>
            <a href="#" className={styles.joinBtn}>
              <span>👤</span>
              <span>Join as a Professional</span>
            </a>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className={styles.tabsSection}>
        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tab} ${serviceTab === "customers" ? styles.active : ""}`}
            onClick={() => setServiceTab("customers")}
          >
            Customers
          </button>
          <button
            className={`${styles.tab} ${serviceTab === "professionals" ? styles.active : ""}`}
            onClick={() => setServiceTab("professionals")}
          >
            Professionals
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          {serviceTab === "customers" ? (
            <div id="customers-services" className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={`${styles.serviceImage} ${styles.deals}`}>🎯</div>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceTitle}>Today's Deals</div>
                  <div className={styles.serviceDescription}>Découvrez nos offres du jour</div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={`${styles.serviceImage} ${styles.domain}`}>🌐</div>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceTitle}>Domain</div>
                  <div className={styles.serviceDescription}>Enregistrez votre nom de domaine</div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={`${styles.serviceImage} ${styles.hosting}`}>🖥️</div>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceTitle}>Web Hosting</div>
                  <div className={styles.serviceDescription}>Hébergement web performant</div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={`${styles.serviceImage} ${styles.mobile}`}>📱</div>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceTitle}>Mobile Apps</div>
                  <div className={styles.serviceDescription}>Applications mobiles sur mesure</div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={`${styles.serviceImage} ${styles.listings}`}>📍</div>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceTitle}>Local Listings</div>
                  <div className={styles.serviceDescription}>Référencement local optimisé</div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={`${styles.serviceImage} ${styles.leads}`}>🎯</div>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceTitle}>Lead Generation</div>
                  <div className={styles.serviceDescription}>Génération de prospects qualifiés</div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={`${styles.serviceImage} ${styles.voip}`}>☎️</div>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceTitle}>VoIP Phone</div>
                  <div className={styles.serviceDescription}>Téléphonie IP professionnelle</div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={`${styles.serviceImage} ${styles.travel}`}>✈️</div>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceTitle}>Cuba Travel</div>
                  <div className={styles.serviceDescription}>Voyages à Cuba clé en main</div>
                </div>
              </div>
            </div>
          ) : (
            <div id="professionals-services" className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={`${styles.serviceImage} ${styles.wordpress}`}>📝</div>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceTitle}>Hosting for WordPress</div>
                  <div className={styles.serviceDescription}>Hébergement WordPress optimisé</div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={`${styles.serviceImage} ${styles.ssl}`}>🔒</div>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceTitle}>SSL Certificates</div>
                  <div className={styles.serviceDescription}>Certificats SSL sécurisés</div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={`${styles.serviceImage} ${styles.website}`}>🎨</div>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceTitle}>Build Your Website</div>
                  <div className={styles.serviceDescription}>Création de sites web professionnels</div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={`${styles.serviceImage} ${styles.crm}`}>📊</div>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceTitle}>CRM & Dashboard</div>
                  <div className={styles.serviceDescription}>Gestion de la relation client</div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={`${styles.serviceImage} ${styles.ai}`}>🤖</div>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceTitle}>AI Solutions</div>
                  <div className={styles.serviceDescription}>Solutions d'intelligence artificielle</div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={`${styles.serviceImage} ${styles.payments}`}>💳</div>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceTitle}>Payments & Invoicing</div>
                  <div className={styles.serviceDescription}>Paiements et facturation automatisés</div>
                </div>
              </div>

              <div className={styles.serviceCard}>
                <div className={`${styles.serviceImage} ${styles.api}`}>👨‍💻</div>
                <div className={styles.serviceContent}>
                  <div className={styles.serviceTitle}>Developers & API</div>
                  <div className={styles.serviceDescription}>API et outils pour développeurs</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className={styles.contentWrapper}>
        <div className={styles.pageHeader}>
          <h1>Collecte d'informations & Consentement à l'inscription</h1>
          <p className={styles.lastUpdated}>Dernière mise à jour : 23 octobre 2025</p>
        </div>

        <div className={styles.contentSection}>
          <h2>1. À qui s'adresse cette page</h2>
          <p>
            La présente page explique ce que nous collectons lorsque vous vous inscrivez
            sur TAKATAK.ca, pourquoi nous le collectons, comment nous l'utilisons et vos
            droits en vertu des lois du Québec et du Canada en matière de protection des
            renseignements personnels. Elle encadre l'inscription des clients, des
            prospects et des professionnels (fournisseurs, partenaires, prestataires).
          </p>

          <p>
            Pour les conditions spécifiques à chacun de nos services (ex. marketing,
            hébergement, listings, POS, marketplace, messagerie), veuillez consulter
            ultérieurement les pages dédiées :{" "}
            <a href="#" className={styles.link}>
              Conditions d'utilisation par service
            </a>{" "}
            (à venir).
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2>2. Qui sommes-nous et qui est responsable</h2>
          <p>
            GROUPE TAKATAK INC. (ci-après, « TAKATAK », « nous ») est responsable du
            traitement des renseignements personnels recueillis via TAKATAK.ca.
          </p>

          <p>
            Conformément à la loi québécoise (Loi 25), nous avons désigné un Responsable
            de la protection des renseignements personnels.
          </p>

          <p>
            Contact : <a href="#" className={styles.link}>Coordonnées du Responsable PRP</a>
          </p>

          <p>
            Cadre juridique : <a href="#" className={styles.link}>Loi 25 (Québec)</a> •{" "}
            <a href="#" className={styles.link}>LPRPDE / PIPEDA (Canada)</a> •{" "}
            <a href="#" className={styles.link}>Commission d'accès à l'information (CAI)</a>
          </p>

          <div className={styles.noteBox}>
            <p>
              <strong>Remarque importante :</strong> TAKATAK est titulaire de la base de
              données et responsable de vos renseignements. Vous conservez vos droits
              (accès, rectification, retrait du consentement, etc.), selon la loi.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2>3. Quand collectons-nous vos informations</h2>
          <p>Nous recueillons des renseignements lorsque vous :</p>
          <ul>
            <li>Créez un compte (client ou professionnel) ;</li>
            <li>Remplissez un formulaire (demande d'info, devis, activation d'un service) ;</li>
            <li>Vous abonnez à des communications (infolettre, offres, notifications) ;</li>
            <li>Interagissez avec nos interfaces (tableau de bord, chat, soutien technique) ;</li>
            <li>Effectuez un achat ou mettez à jour votre profil ;</li>
            <li>Consentez à la géolocalisation ou à la personnalisation via cookies/traceurs.</li>
          </ul>

          <p>
            Pour les cookies, identifiants publicitaires et technologies similaires, voir :{" "}
            <a href="#" className={styles.link}>Politique des témoins (Cookies)</a>.
          </p>
        </div>

        <div className={styles.contentSection}>
          <h2>4. Quelles informations recueillons-nous (liste exhaustive et granulaire)</h2>

          <h3>4.1 Identité & contact</h3>
          <ul>
            <li>Prénom, nom ;</li>
            <li>Adresse courriel ;</li>
            <li>Numéro de téléphone (mobile, professionnel, WhatsApp) ;</li>
            <li>Adresse postale (facturation/livraison, si applicable).</li>
          </ul>
          <p>
            <strong>Finalités :</strong> création de compte, sécurité, communications de
            service et relation client.
          </p>
          <p>
            <strong>Base légale :</strong>{" "}
            <a href="#" className={styles.link}>Consentement explicite</a>.
          </p>

          <h3>4.2 Compte & profil</h3>
          <ul>
            <li>Identifiant, mots de passe chiffrés (jamais stockés en clair) ;</li>
            <li>Préférences (langue, thèmes, alertes) ;</li>
            <li>Photo de profil / logo (professionnels) ;</li>
            <li>Nom légal d'entreprise, NEQ, MIPYMES (Cuba) ou équivalents, si fournis.</li>
          </ul>
          <p>
            <strong>Finalités :</strong> personnalisation, conformité, vérification de
            l'éligibilité (certaines sections requièrent des informations légales).
          </p>
          <p>
            <strong>Base légale :</strong>{" "}
            <a href="#" className={styles.link}>Exécution des services</a>,{" "}
            <a href="#" className={styles.link}>Consentement explicite</a>.
          </p>

          <h3>4.3 Informations commerciales (professionnels)</h3>
          <ul>
            <li>Catégories de services offerts, zones desservies, horaires, licences ;</li>
            <li>Coordonnées publiques à afficher (si vous choisissez d'être listé) ;</li>
            <li>Preuves d'inscription / autorisations sectorielles.</li>
          </ul>
          <p>
            <strong>Finalités :</strong> création de fiches, conformité, affichage sur la
            plateforme.
          </p>
          <p>
            <strong>Base légale :</strong>{" "}
            <a href="#" className={styles.link}>Exécution des services</a>.
          </p>

          <h3>4.4 Données transactionnelles</h3>
          <ul>
            <li>Historique de commandes/abonnements, montants, statuts ;</li>
            <li>Réclamations, remboursements, avoirs.</li>
          </ul>
          <p>
            <strong>Finalités :</strong> exécution contractuelle, facturation, prévention
            de fraude.
          </p>
          <p>
            <strong>Base légale :</strong>{" "}
            <a href="#" className={styles.link}>Exécution des services</a>,{" "}
            <a href="#" className={styles.link}>Obligations légales (comptables/fiscales)</a>.
          </p>

          <div className={styles.noteBox}>
            <p>
              <strong>Paiements :</strong> les données de carte sont traitées par des
              processeurs de paiement certifiés (ex. Stripe/équivalents). Nous ne
              stockons pas vos numéros de carte complets. Détails :{" "}
              <a href="#" className={styles.link}>Paiements & Sécurité PCI</a>.
            </p>
          </div>

          <h3>4.5 Communications & support</h3>
          <ul>
            <li>Messages envoyés via nos formulaires, chat interne, e-mails au support ;</li>
            <li>Enregistrements techniques (date/heure, canal, métadonnées d'envoi).</li>
          </ul>
          <p>
            <strong>Finalités :</strong> service client, preuve d'échanges, amélioration de
            la qualité.
          </p>
          <p>
            <strong>Base légale :</strong>{" "}
            <a href="#" className={styles.link}>Intérêt légitime (qualité & sécurité)</a>.
          </p>

          <h3>4.6 Données techniques & analytiques</h3>
          <ul>
            <li>Adresse IP, identifiants de session, type d'appareil ;</li>
            <li>Logs (pages visitées, temps de session, événements) ;</li>
            <li>Cookies/SDK pour authentification, sécurité, mesure d'audience, personnalisation.</li>
          </ul>
          <p>
            <strong>Finalités :</strong> sécurité (détection d'abus), performance,
            personnalisation.
          </p>
          <p>
            <strong>Base légale :</strong>{" "}
            <a href="#" className={styles.link}>Consentement cookies</a> &{" "}
            <a href="#" className={styles.link}>Intérêt légitime (sécurité)</a>.
          </p>
          <p>
            <strong>Paramétrage :</strong>{" "}
            <a href="#" className={styles.link}>Centre de préférences cookies</a>.
          </p>

          <h3>4.7 Données de géolocalisation (si vous l'acceptez)</h3>
          <ul>
            <li>Position approximative (IP) ou précise (GPS) ;</li>
          </ul>
          <p>
            <strong>Finalités :</strong> proposer des services proches de vous, sécurité
            (fraude), suivi de livraison le cas échéant.
          </p>
          <p>
            <strong>Base légale :</strong>{" "}
            <a href="#" className={styles.link}>Consentement géolocalisation</a>.
          </p>
          <p>
            <strong>Retrait :</strong>{" "}
            <a href="#" className={styles.link}>Gérer mes autorisations de localisation</a>.
          </p>

          <h3>4.8 Données relatives au marketing</h3>
          <ul>
            <li>Consentements marketing (e-mail, SMS, WhatsApp) ;</li>
            <li>Préférences (types d'offres, fréquence) ;</li>
            <li>Interactions (ouvertures/clics des infolettres).</li>
          </ul>
          <p>
            <strong>Finalités :</strong> vous envoyer seulement ce que vous souhaitez
            recevoir.
          </p>
          <p>
            <strong>Base légale :</strong>{" "}
            <a href="#" className={styles.link}>Consentement marketing</a>.
          </p>
          <p>
            <strong>Gestion :</strong>{" "}
            <a href="#" className={styles.link}>Gérer mes abonnements</a> •{" "}
            <a href="#" className={styles.link}>Me désabonner</a>.
          </p>

          <h3>4.9 Décisions automatisées & personnalisation (si activées)</h3>
          <ul>
            <li>Recommandations de services, classement, appariement (professionnels ↔ clients) ;</li>
            <li>Détection de risque/fraude (scores algorithmiques).</li>
          </ul>
          <p>
            En savoir plus :{" "}
            <a href="#" className={styles.link}>Explications des algorithmes & facteurs</a>{" "}
            • <a href="#" className={styles.link}>Contester une décision automatisée</a>.
          </p>

          <div className={styles.noteBox}>
            <p>
              <strong>Mineurs :</strong> au Québec, moins de 14 ans → consentement requis du
              titulaire de l'autorité parentale. Détails :{" "}
              <a href="#" className={styles.link}>Consentement des mineurs</a>.
            </p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2>5. Pourquoi collectons-nous ces informations (finalités précises)</h2>
          <ul>
            <li><strong>Création et gestion de compte :</strong> accès sécurisé, réinitialisation de mot de passe ;</li>
            <li><strong>Exécution des services :</strong> commandes, réservations, contrats, facturation ;</li>
            <li><strong>Assistance & sécurité :</strong> détection d'abus, résolution d'incidents ;</li>
            <li><strong>Amélioration produits :</strong> statistiques d'usage, tests de fonctionnalités ;</li>
            <li><strong>Marketing avec consentement :</strong> offres pertinentes, programmes de fidélité ;</li>
            <li><strong>Conformité légale :</strong> obligations fiscales, comptables, plaintes et litiges.</li>
          </ul>
          <p>Voir : <a href="#" className={styles.link}>Registre des finalités & bases légales</a>.</p>
        </div>

        <div className={styles.contentSection}>
          <h2>6. Fondements juridiques (bases légales)</h2>
          <ul>
            <li><strong>Consentement explicite</strong> (ex. marketing, géolocalisation, traceurs non essentiels) : <a href="#" className={styles.link}>Consentement explicite</a> ;</li>
            <li><strong>Exécution d'un contrat</strong> / de mesures précontractuelles : <a href="#" className={styles.link}>Exécution des services</a> ;</li>
            <li><strong>Obligations légales</strong> (fiscales/comptables, prévention de la fraude) : <a href="#" className={styles.link}>Obligations légales</a> ;</li>
            <li><strong>Intérêt légitime</strong> (sécurité du service, qualité, preuve d'échanges) : <a href="#" className={styles.link}>Intérêt légitime & équilibre</a>.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2>7. Combien de temps conservons-nous vos données (durées de conservation)</h2>
          <p>Nous appliquons un calendrier de conservation fondé sur les finalités, la loi et les prescriptions. À titre indicatif :</p>
          <ul>
            <li><strong>Compte inactif :</strong> anonymisation/suppression après un délai raisonnable (ex. 24 mois d'inactivité) ;</li>
            <li><strong>Dossiers de facturation :</strong> conservation minimale requise par la loi (ex. 7 ans) ;</li>
            <li><strong>Journaux de sécurité :</strong> durée proportionnée (ex. 12 mois, sauf incident) ;</li>
            <li><strong>Consentements marketing :</strong> jusqu'au retrait du consentement.</li>
          </ul>
          <p>Détail complet : <a href="#" className={styles.link}>Calendrier de conservation</a>.</p>
        </div>

        <div className={styles.contentSection}>
          <h2>8. Où sont stockées vos données & transferts</h2>
          <p>Hébergement sur des serveurs sécurisés (prioritairement au Canada, avec redondance).</p>
          <p>Transferts transfrontaliers possibles (fournisseurs techniques) avec garanties contractuelles adéquates (clauses de protection, chiffrement).</p>
          <p>Plus d'infos : <a href="#" className={styles.link}>Transferts internationaux & garanties</a>.</p>
        </div>

        <div className={styles.contentSection}>
          <h2>9. Avec qui partageons-nous vos informations</h2>
          <ul>
            <li>Sous-traitants (hébergement, envoi d'e-mails/SMS, paiements, analytics) strictement nécessaires à l'exécution des services ;</li>
            <li>Prestataires professionnels (pour les profils qui choisissent d'être visibles publiquement sur la plateforme) ;</li>
            <li>Autorités compétentes si la loi l'exige ou pour faire valoir nos droits.</li>
          </ul>
          <p><strong>Nous ne vendons pas vos renseignements personnels.</strong> Détails : <a href="#" className={styles.link}>Liste des sous-traitants & engagements</a>.</p>
        </div>

        <div className={styles.contentSection}>
          <h2>10. Sécurité & confidentialité</h2>
          <ul>
            <li>Chiffrement des données en transit ;</li>
            <li>Contrôles d'accès et journalisation ;</li>
            <li>Tests de sécurité et plan de réponse aux incidents ;</li>
            <li>Signalement à la CAI et aux personnes concernées en cas d'incident de confidentialité présentant un risque sérieux.</li>
          </ul>
          <p>Processus complet : <a href="#" className={styles.link}>Sécurité & gestion des incidents</a>.</p>
        </div>

        <div className={styles.contentSection}>
          <h2>11. Vos droits (Québec & Canada)</h2>
          <p>Vous pouvez, en tout temps :</p>
          <ul>
            <li><strong>Accéder</strong> à vos renseignements : <a href="#" className={styles.link}>Demande d'accès</a> ;</li>
            <li><strong>Rectifier</strong> des données inexactes : <a href="#" className={styles.link}>Demande de rectification</a> ;</li>
            <li><strong>Retirer</strong> votre consentement (marketing, géolocalisation, cookies non essentiels) : <a href="#" className={styles.link}>Gérer mes consentements</a> ;</li>
            <li><strong>Portabilité</strong> (lorsque applicable) : <a href="#" className={styles.link}>Demande de portabilité</a> ;</li>
            <li><strong>S'opposer</strong> à certaines utilisations (lorsque la loi le permet) : <a href="#" className={styles.link}>Demande d'opposition</a> ;</li>
            <li><strong>Exiger la cessation d'une diffusion</strong> (dé-indexation/déréférencement, selon critères) : <a href="#" className={styles.link}>Demande de désindexation</a>.</li>
          </ul>
          <p><strong>Autorité de contrôle :</strong> <a href="#" className={styles.link}>Commission d'accès à l'information</a>.</p>
        </div>

        <div className={styles.contentSection}>
          <h2>12. Communications que vous acceptez en vous inscrivant</h2>
          <p>En créant un compte et en cliquant sur « S'inscrire », vous autorisez TAKATAK à vous contacter pour :</p>

          <div className={styles.subsection}>
            <h4>1. Communications de service (obligatoires)</h4>
            <p>Sécurité, changements de compte, mises à jour contractuelles.</p>

            <h4>2. Notifications opérationnelles (liées à vos services)</h4>
            <p>Renouvellements, alertes de facturation, maintenance planifiée.</p>

            <h4>3. Marketing (facultatif, avec consentement séparé)</h4>
            <p>Offres, nouveautés, programmes de fidélité.</p>
          </div>

          <p>Gérez vos préférences à tout moment : <a href="#" className={styles.link}>Gérer mes abonnements</a> • <a href="#" className={styles.link}>Me désabonner</a>.</p>
        </div>

        <div className={styles.contentSection}>
          <h2>13. Consentements distincts et granulaires (cases à cocher à l'inscription)</h2>
          <p>À l'inscription, nous présentons des cases distinctes afin que vous choisissiez explicitement :</p>
          <ul>
            <li>Je consens aux communications marketing par courriel : <a href="#" className={styles.link}>Consentement marketing – e-mail</a> ;</li>
            <li>Je consens aux communications par SMS/WhatsApp : <a href="#" className={styles.link}>Consentement marketing – SMS/WhatsApp</a> ;</li>
            <li>J'autorise l'usage de cookies non essentiels (personnalisation/analyse) : <a href="#" className={styles.link}>Consentement cookies</a> ;</li>
            <li>J'autorise la géolocalisation pour des services de proximité : <a href="#" className={styles.link}>Consentement géolocalisation</a> ;</li>
            <li>J'accepte la personnalisation/les recommandations reposant sur mon activité : <a href="#" className={styles.link}>Personnalisation & décisions automatisées</a>.</li>
          </ul>

          <div className={styles.noteBox}>
            <p>Vous pouvez refuser les options non essentielles sans que cela n'empêche la création de votre compte (certaines fonctionnalités pourraient toutefois être limitées).</p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2>14. Déclaration de consentement (texte lisible avant « S'inscrire »)</h2>

          <div className={styles.consentBox}>
            <blockquote>
              En cliquant sur « S'inscrire », je reconnais avoir lu et compris la page « Collecte d'informations & Consentement à l'inscription » de TAKATAK.ca et j'y consens.
            </blockquote>
            <p>J'autorise GROUPE TAKATAK INC. à collecter, utiliser et conserver mes renseignements personnels pour les finalités énoncées, y compris la création et la gestion de mon compte, la fourniture des services demandés, la sécurité, et, si je l'ai choisi, les communications marketing.</p>
            <p>Je comprends que je peux retirer mon consentement aux usages non essentiels, accéder à mes données, demander leur rectification et gérer mes préférences à tout moment via <a href="#" className={styles.link}>Mon compte – Confidentialité</a> ou en écrivant à <a href="#" className={styles.link}>Contact confidentialité</a>.</p>
          </div>
        </div>

        <div className={styles.contentSection}>
          <h2>15. Mineurs & représentants légaux</h2>
          <ul>
            <li><strong>Moins de 14 ans (Québec) :</strong> le consentement doit provenir du titulaire de l'autorité parentale.</li>
            <li><strong>Représentants (tuteurs/mandataires) :</strong> sur présentation des documents requis.</li>
          </ul>
          <p>Procédure : <a href="#" className={styles.link}>Consentement des mineurs & représentants</a>.</p>
        </div>

        <div className={styles.contentSection}>
          <h2>16. Plaintes, questions, demandes officielles</h2>
          <ul>
            <li>Contact confidentialité : <a href="#" className={styles.link}>Contact confidentialité</a> ;</li>
            <li>Formulaire exercice des droits (accès, rectification, retrait, opposition, portabilité) : <a href="#" className={styles.link}>Formulaire – Exercice des droits</a> ;</li>
            <li>Commission d'accès à l'information (Québec) : <a href="#" className={styles.link}>Commission d'accès à l'information</a>.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2>17. Mises à jour de cette page</h2>
          <p>Nous pouvons mettre à jour ce document pour refléter les évolutions légales ou de service. En cas de changement substantiel, nous vous en informerons par les canaux de service (ex. courriel du compte).</p>
          <p>Historique et versions : <a href="#" className={styles.link}>Historique des versions</a>.</p>
        </div>

        <div className={styles.contentSection}>
          <h2>18. Résumé clair (TL;DR)</h2>
          <ul>
            <li>Nous collectons ce qui est nécessaire pour créer votre compte, fournir nos services et sécuriser la plateforme.</li>
            <li>Vous choisissez ce qui est optionnel (marketing, géolocalisation, cookies non essentiels).</li>
            <li>Vous pouvez accéder, corriger, retirer votre consentement, vous opposer dans les limites prévues par la loi.</li>
            <li>Nous ne vendons pas vos données. Nous travaillons avec des sous-traitants essentiels, contrôlés et sécurisés.</li>
            <li>TAKATAK est responsable de la base de données ; vos droits demeurent intacts.</li>
          </ul>
        </div>

        <div className={styles.contentSection}>
          <h2>Annexes (pages à créer et lier plus tard)</h2>
          <ul>
            <li><a href="#" className={styles.link}>Politique de confidentialité (complète)</a></li>
            <li><a href="#" className={styles.link}>Conditions générales TAKATAK (cadre commun)</a></li>
            <li><a href="#" className={styles.link}>Conditions d'utilisation par service</a></li>
            <li><a href="#" className={styles.link}>Politique des témoins (Cookies) & Centre de préférences</a></li>
            <li><a href="#" className={styles.link}>Transferts internationaux & garanties contractuelles</a></li>
            <li><a href="#" className={styles.link}>Sécurité & gestion des incidents</a></li>
            <li><a href="#" className={styles.link}>Liste des sous-traitants & engagements</a></li>
            <li><a href="#" className={styles.link}>Explications des algorithmes & facteurs / Contester une décision</a></li>
            <li><a href="#" className={styles.link}>Registre des finalités & bases légales</a></li>
            <li><a href="#" className={styles.link}>Consentement explicite</a> • <a href="#" className={styles.link}>Consentement marketing – e-mail/SMS/WhatsApp</a> • <a href="#" className={styles.link}>Consentement géolocalisation</a></li>
            <li><a href="#" className={styles.link}>Consentement des mineurs</a></li>
            <li><a href="#" className={styles.link}>Mon compte – Confidentialité</a> • <a href="#" className={styles.link}>Gérer mes abonnements</a> • <a href="#" className={styles.link}>Me désabonner</a></li>
            <li><a href="#" className={styles.link}>Formulaire – Exercice des droits</a></li>
            <li><a href="#" className={styles.link}>Obligations légales (comptables/fiscales)</a></li>
            <li><a href="#" className={styles.link}>Historique des versions</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
