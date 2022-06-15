const locale = {
  translation: {
    common:{
      showMore: 'Montrer Plus',
      showLess: 'Montrer Moins',
      euros : "€",
      continue: "Continuer"
    },
    form:{
      incorrectEmail: 'Veuillez rentrer un email correct',
      incorrectPassword: 'Veuillez rentrer un mot de passe correct',
      incorrectFirstname: 'Veuillez rentrer un prénom correct',
      incorrectLastname: 'Veuillez rentrer un nom correct',
      fillPasswords: "Veuillez remplir le mot de passe actuel, nouveau et sa confirmation",
      blankInputs: "Veuillez remplir tous les champs obligatoires (prénom, nom et email)",
      blankInputsWithPassword: "Veuillez remplir tous les champs obligatoires (prénom, nom, mot de passe et email)",
      passwordPlaceholder: "Mot de Passe",
      currentPasswordPlaceholder: 'Mot de passe actuel',
      newPasswordPlaceholder: "Nouveau mot de passe",
      passwordConfirmPlaceholder: "Confirmation de mot de Passe",
      emailPlaceholder: "Email",
      firstnamePlaceholder:"Prénom",
      lastnamePlaceholder:"Nom",
      phonePlaceholder:'Numéro de téléphone',
      incorrectPhone: 'Numéro de téléphone incorrect'
    },
    tabBar:{
      sweets: "Mignardises",
      recipes: "Recettes",
      events: "Evenements",
      cart: "Panier",
      account: "Compte"
    },
    forgotPassword:{
      title: "Mot de passe oublié?",
      login: "Se Connecter",
      validate: "Récupérer mon mot de passe"
    },
    login:{
      title: "Déja inscrit? Connectez vous",
      forgotPassword: "Mot de Passe oublié?",
      signIn: "Connexion",
      dontHaveAccount: "Vous n'avez pas de compte? ",
      register: "Inscription",
      loginError : "La connexion a échoué"
    },
    register: {
      title: "Inscription",
      alreadyHaveAccount: "Vous avez déjà un compte? ",
      login: "Se connecter",
      register: "S'inscrire",
      registerError: "L'inscription a échoué"
    },
    shop:{
      title: "Mignardises",
      noProducts: "Aucun produit"
    },
    details:{
      comment : "Commenter",
      add: "Ajouter"
    },
    events:{
      title: "TODO events title"
    },
    recipes:{
      title: "Recettes",
      noRecipes: "Aucune recette"
    },
    recipe:{
      minutes: "min",
      totalTime: "Temps total : ",
      preparation: "Préparation",
      chill:"Repos",
      cook:"Cuisson",
      cost: "Coût",
      level:"Niveau",
      portions:"Portions",
      steps: "Etapes : ",
      difficulty:{
        noob: "Débutant",
        easy: "Facile",
        normal: "Normal",
        hard: "Difficile"
      }
    },
    cart:{
      quantity: "quantity : ",
      title: "Votre Panier",
      empty: "Vous n'avez rien dans votre panier pour l'instant ! ",
      checkout: "Payer "
    },
    comment:{
      title: "Commenter",
      send: 'Envoyer',
      commentPlaceholder: 'Votre commentaire',
      errorStar: 'Veuillez renseigner une note',
      commentError: "Une erreur est survenue pendant la publication du commentaire",
      report: "Signaler"
    },
    account:{
      title: "Bonjour ",
      logout: "Se déconnecter",
      edit: "Modifier les informations",
      firstname: "Prénom : ",
      lastname: "Nom : ",
      email: "Email : ",
      phone: "Téléphone : ",
      unknown: "Non renseigné",
      editPassword: "Modifier le mot de passe",
      orders: "Vos commandes"
    },
    editAccount:{
      title: "Modifiez vos informations",
      save: "Enregistrer",
      error: "Une erreur est survenue lors de la sauvegarde des informations"
    },
    editPassword:{
      title: "Modifier votre mot de passe"
    },
    errorModal:{
      title: "Oups !",
      content: "Une erreur est survenue... Vérifiez votre connexion internet",
      close: "Fermer"
    },
    reportModal:{
      title: "Signaler ce commentaire",
      content: "Veuillez choisir une raison au signalement de ce commentaire dans la liste ci dessous",
      send: "Envoyer",
      cancel: "Annuler",
      reason: {
        choose: "Choisir une raison",
        uncivil: "Incivil, grossier ou vulgaire",
        discrimination: "Discrimination",
        localBusiness: "Site d'offres de tiers",
        illegalContent: "Contient des contenus ou des activités illégaux",
        other: "Autre..."
      },
      error: 'Une erreur est survenue, veuillez réessayer plus tard',
      errorAlreadyMade: 'Vous avez déjà signalé ce commentaire'
    },
    orders:{
      title: "Vos commandes",
      empty: "Vous n'avez pas de commandes pour l'instant",
      orderedOn: "Commandé le : ",
      orderSchedule: "Commande pour le : ",
      items: "Produits : ",
      totalPrice: "Prix total : ",
      status: {
        ordered: "COMMANDÉ",
        paid: "PAYÉ",
        created: "CRÉÉ",
        delivered: "LIVRÉ",
        ready: "PRÊT",
        unknown: "Status inconnu"
      }
    },
    filters:{
      title: "Filtres",
      filtersModal: {
        title: "Filtres",
        rating: "Note",
        price: "Prix",
        filter: "Filtrer",
        clear: "Réstaurer les filtres",
        close: "Fermer",
        category: "Catégorie",
        categories:{
          sweety:"Sucré",
          salty:"Salé",
          mix: "Mixte"
        }
      }
    },
    cartRecap:{
      title: "Récapitulatif du panier"
    },
    confirmation:{
      title: "Confirmation"
    },
    payment:{
      title: "Paiement"
    },
    cgu:{
      title: "Conditions Générales d'Utilisation",
      cgv: {
        title: "Conditions Générales de vente",
        content: "Les présentes conditions générales de vente (CGV) s’appliquent à toutes les ventes effectuées sur le présent site Internet Fi.Sweets . Elles exposent les droits et obligation des Parties dans le cadre de la vente de mignardise sur Internet et sont conclues entre :\n" +
            "d’une part FI.Sweets au Capital de 1€, situé au 13 rue romy Scneider, 94490 Ormesson sur marne.\n" +
            "d’autre part le Client ou toute autre personne, particulier ou entreprise, visitant ou effectuant un achat via le Site (ci-après dénommé le \"Client\").\n" +
            "La Société et le Client sont dénommés ensemble les « Parties ».\n",
        accept:{
          title: "Acceptation des conditions générales de vente",
          content: "L’acceptation des présentes conditions s’effectue sans réserve de la part du Client.\n" +
              "Les CGV font partie intégrante de notre offre et sont systématiquement portées à la connaissance de tout Client préalablement à la passation d’une commande. Elles prévalent sur toutes autres conditions figurant dans tout autre document (renseignements fournis de façon directe, supports publicitaires, descriptions, …).\n" +
              "Toute condition contraire opposée par le Client sera inopposable à la Société et ce quel que soit le moment où elle aura pu être portée à notre connaissance.\n" +
              "Aucune signature manuscrite ou électronique n’est nécessaire pour engager le Client, le fait pour ce dernier de cocher la case « j’ai pris connaissance des conditions générales de vente et je les accepte » avant de valider sa commande entraîne automatiquement l’acceptation expresse par ce dernier des présentes CGV.\n" +
              "Les CGV applicables sont celles en vigueur au jour de la commande effectuée par le Client. La Société se réserve le droit de modifier les présentes CGV sans préavis. Celles-ci seront alors applicables aux ventes réalisées postérieurement à la modification.\n",
        },
        serviceAccess: {
          title: "Accessibilité des services",
          content: "Le Site Internet est accessible 24/24h et 7/7j, sauf interruption, programmée ou non par la Société. La Société ne saurait être tenue responsable de tout dommage, quelle qu’en soit la nature, résultant d’une indisponibilité du Site.\n" +
              "La mise à disposition du compte du Client ne lui ouvre aucun droit et ne crée aucune obligation à la charge de la Société.\n" +
              "La transmission d’informations par Internet peut ne pas être totalement sécurisée. Bien que la Société prenne l’ensemble des dispositions requises par la loi pour protéger l’ensemble des informations des Clients sur son Site, la Société ne pourra garantir que la transmission des données à notre Site Internet soit protégée. Cette transmission intervient aux risques du Client.\n"
        },
        customerService: {
          title:"Service Client et réclamation",
          content:"Pour toute question ou réclamation, notre service Client est à la disposition de nos Clients. Nous invitons nos Clients à nous faire part de leurs réclamations au plus tôt afin que nous puissions leur proposer une solution adaptée. Les moyens de contact sont les suivants :\n" +
              "Mail : fi.sweets.94@gmail.com\n"
        },
        products: {
          title: "Produits et disponibilité",
          content:"La Société prépare, commercialise en ligne et livre des plats au bénéfice de particuliers et d’entreprises. Les services de la Société sont réservés au Client, majeur, pour sa propre consommation. La revente des produits commercialisés par la Société est formellement interdite\n" +
              "Les produits mis en vente sont conformes à la réglementation et aux normes en vigueur en France et/ou dans l’Union Européenne à la date de leur livraison. Chaque produit est accompagné d’un descriptif permettant au Client de connaître sa composition conformément à l’article L. 111-1, 1° du Code de la consommation.\n" +
              "Il appartient au Client de se renseigner en amont de toute commande notamment en cas d’intolérance ou d’allergies alimentaires.\n" +
              "Le dressage des produits est fait à la main.\n" +
              "Les produits sont livrés froids. Leur consommation peut être différée sous réserve du respect de la Date Limite de Consommation (“DLC”) indiquée sur l’emballage et d’une conservation au réfrigérateur entre 0° et 4°. Il revient au Client de réchauffer les produits livrés qui le nécessitent selon les instructions et recommandations figurant sur sur le Site Internet.\n" +
              "La Société ne saurait être tenue pour responsable en cas de mauvaise condition de conservation des produits après livraison, en cas de consommation après la DLC ou dans tout autre cas où le Client n’aurait pas respecté les règles d’hygiène portées à sa connaissance par la Société ou par les autorités sanitaires.\n" +
              "La Société se réserve le droit de modifier la composition d’un produit en fonction notamment de la disponibilité des ingrédients. Elle en informera préalablement les Clients concernés notamment en cas de modification d'ingrédients entraînant la présence d'un allergène supplémentaire. La Société s’engage à proposer une solution adaptée au Client sur simple demande s'il était indisposé par cette substitution, y compris le remplacement, dans la mesure du possible et en tout cas jusqu'à épuisement des stocks, ou remboursement des produits modifiés.\n" +
              "Les photographies et illustrations présentées en ligne sont des suggestions de présentation.\n" +
              "La Société se réserve le droit de modifier à tout moment et sans préavis son offre. En conséquence, les produits de notre offre sont disponibles tant qu’ils figurent sur le Site et dans la limite des stocks. En cas d’indisponibilité du produit après la passation de la commande, le Client sera informé par mail, et aucun paiement ne sera débité ; si le paiement a déjà été débité, il sera remboursé.\n" +
              "Certains produits commandés par le Client pourraient ne plus être disponibles le jour prévu de la livraison en raison d'événements imprévisibles (pénurie d’essence par exemple), d’aléas climatiques, de l’indisponibilité des produits chez les fournisseurs pour toute autre cause. Dans cette hypothèse, la Société informera le client dans les plus brefs délais par courrier électronique, SMS ou téléphone et lui proposera une solution de remplacement ou un remboursement total ou partiel de sa commande.\n"
        },
        orders: {
          title: "Commandes",
          content: "Pour passer commande, le Client devra créer un compte, choisir un identifiant et un mot de passe, à conserver de manière strictement confidentielle, auxquels il associe son prénom, son nom une adresse de livraison précise et un numéro de téléphone mobile opérationnel afin de permettre la livraison de la commande dans les meilleurs délais.\n" +
              "A cette fin, le Client s’engage à fournir des informations sincères, véritables et à jour au moment de la prise de commande. La Société ne saurait être tenue pour responsable des conséquences résultant de données erronées ou incomplètes, notamment dans les coordonnées du destinataire, les quantités et type de produits commandés, ou le compte à débiter.\n" +
              "La Société confirme la prise en compte de la commande du Client par courriel.\n" +
              "La Société se réserve le droit de réclamer des informations complémentaires au Client, et de suspendre une commande dans une situation d’usage supposé abusif de ses services.\n" +
              "La Société se réserve le droit de ne pas donner suite à une commande dans le cas notamment de la survenance de tout événement imprévisible. En pareille circonstance, aucun frais ne sera facturé au Client. Le cas échéant, la Société en informera le Client par tout moyen.\n" +
              "Les informations contractuelles, présentées au Client en langue française, feront l’objet d’une confirmation au moment de la validation de la commande.\n" +
              "Le Client est entièrement responsable des informations lors de l’enregistrement de la commande. En conséquence, notre responsabilité ne saurait être recherchée ni engagée dans le cas où la Société serait dans l’impossibilité de livrer ou d’exécuter la commande en raison d’erreurs, imprécisions ou omissions relativement à ces informations.\n" +
              "Le Client, qui souhaite commander un ou plusieurs produits doit obligatoirement :\n" +
              "Se connecter en s’identifiant au moment de passer commande, ou créer un compte personnel.\n" +
              "Pour ce faire, il devra remplir le formulaire d’inscription ainsi que les détails de livraison sur lesquels il indiquera toutes les coordonnées demandées .\n" +
              "Le Client est en outre amené à choisir un mot de passe qui devra rester confidentiel et ne pas être divulgué à un tiers. Le Client demeure responsable de l’utilisation de son compte et de son mot de passe.\n" +
              "Remplir le panier de commande en ligne en sélectionnant les produits choisis\n" +
              "Valider sa commande après l’avoir vérifiée, et notamment le lieu de livraison, ainsi que la date et l’heure de livraison sélectionnées\n" +
              "Effectuer le paiement dans les conditions prévues\n" +
              "Confirmer sa commande et son règlement\n" +
              "Préalablement à la conclusion du contrat, la Société porte à la connaissance du Client, conformément à l’article  L.221-5 du Code de la consommation, notamment\n" +
              "Une information sur les caractéristiques essentielles du produit commandé par le Client\n" +
              "Le prix du produit et les modalités de paiement\n" +
              "Les frais de livraison selon l’adresse de livraison et le créneau horaire de livraison choisi\n" +
              "La date de mise à disposition ou de livraison du produit\n" +
              "Les informations relatives à la Société, notamment ses coordonnées postales et téléphoniques\n" +
              "L’information selon laquelle le Client ne bénéficie pas du droit de rétractation sur les produits périssables\n" +
              "La prise en charge par vos soins des frais de retour des produits non-périssables en cas d’exercice de votre droit de rétractation\n" +
              "Un rappel de l'existence d'une garantie légale de conformité pour les produits\n" +
              "Les informations relatives au service après-vente et aux garanties commerciales\n" +
              "Les conditions de résiliation du contrat\n" +
              "Le montant total de la commande (prix hors taxe, prix TTC, frais de port ou l’indication de l’absence de frais de port). \n"
        },
        orderControl: {
          title: "Contrôle des commandes",
          content: "Dans le but de prévenir les utilisations frauduleuses de moyens de paiement, de comptes Clients, d'adresses de livraison, et afin de renforcer la sécurité des transactions des Clients, la Société se réserve le droit d’effectuer des contrôles sur les commandes passées par ses Clients.\n" +
              "La Société pourra ainsi demander à chaque Client de lui transmettre des documents justifiant de l’authenticité de son identité et/ou de son domicile (pièce d’identité, justificatif de domicile comme une facture d’électricité ou de téléphone fixe), que le Client soit une personne physique ou une personne morale.\n" +
              "Dans le cadre de ces contrôles, si les pièces justificatives n’étaient pas adressées à la Société ou si les pièces adressées ne permettaient pas d'établir avec certitude l'identité de l'auteur de la commande et la réalité de la domiciliation, la Société se réserve le droit de ne pas valider la commande.\n" +
              "Les pièces justificatives seront conservées uniquement le temps du traitement de la demande du Client.\n"
        },
        prices: {
          title: "Les tarifs",
          content: "Les tarifs des produits exprimés en euros et toutes taxes comprises hors participation aux frais de livraison et de transport, en tenant compte du taux de TVA applicable le jour de la commande, sont ceux en vigueur. La Société se réserve le droit de modifier les prix à tout moment.\n" +
              "Les produits seront facturés sur la base du tarif en vigueur au moment de la commande. Les frais de livraison, lorsqu’ils sont applicables, sont indiqués dans le résumé de commande sous le libellé « frais de livraison ».\n"
        },
        payment: {
          title: "Paiement et impayés",
          content: "Le prix est payable comptant le jour de la validation de la commande par le Client.\n" +
              "Le paiement s’effectue soit : \n" +
              "par carte bancaire (Carte Bleue, Carte Visa, Carte Mastercard, Amex) via notre plateforme de paiement Stripe, dans un environnement sécurisé par un procédé de cryptage des données qui en assure la confidentialité \n" +
              "via Paypal\n" +
              "en espèce\n" +
              "chacun participant activement à la sécurisation des transactions.\n" +
              "Le montant soumis au paiement est égal à celui de la commande diminué du montant des réductions accordées par la Société lors de la commande . \n" +
              "Le paiement se déroule donc directement entre le Client et la plateforme de paiement. Les informations transmises par le Client à partir de son ordinateur ne sont ni partagées avec les employés de la Société, ni avec des tiers.\n" +
              "Les coordonnées peuvent être enregistrées avec l’acceptation du Client, ce qui signifie que le Client n’aura pas besoin de communiquer ces informations lors de chaque nouvelle commande. Le paiement sera débité sur le moyen de paiement déjà mémorisé de son choix.\n" +
              "En cas de refus du centre du paiement bancaire concerné, la commande sera automatiquement refusée. En cas de paiement non validé le Client devra contacter son établissement bancaire et/ou le service Client de la Société.\n" +
              "En cas d’impayé, la commande sera annulée.\n"
        },
        discounts: {
          title: "Remises",
          content: "Des offres spécifiques peuvent être mises en place dans le cadre d’accords commerciaux avec certains partenaires. Celles-ci font l’objet de conditions particulières et permettent à certains Clients de disposer de remises sur leur addition (frais de livraison ou sur les produits) selon des modalités spécifiques définies contractuellement.\n"
        },
        complianceOnDelivery: {
          title: "Conformité lors de la livraison",
          content: "Il appartiendra au client de vérifier les produits au moment même de leur livraison. En conséquence:\n" +
              "En cas de produits manquants ou abîmés, le client devra faire toutes constatations nécessaires lors de la réception des produits auprès du service Client de la Société afin qu’une solution soit trouvée dans les meilleurs délais.\n" +
              "En cas de non-conformité des produits livrés par rapport aux produits commandés, le Client devra formuler ses réclamations par écrit, dès qu'il en a la possibilité, à réception des produits à la Société.\n" +
              "Les canaux de communication ont été précisés en dans la partie Service Client et Réclamations.\n"
        },
        sponsorship: {
          title: "Parrainage",
          content: "La Société propose à ses Clients de parrainer leurs amis et cercles proches pour leur faire découvrir le service proposé. Chaque Client ayant honoré une première commande dispose d’un code parrain qu’il peut partager à sa convenance à ses filleuls.\n" +
              "Lors de leur première commande, les nouveaux Clients ont la possibilité de saisir un code de parrainage leur permettant de bénéficier d’une promotion. Ce code de parrainage n’est pas cumulable avec une autre promotion en cours. Il n’est valable que si ce nouveau Client n’a jamais commandé auparavant sur le Site.\n" +
              "Le parrainage a pour but de faire découvrir le Site à ses proches. Un Client peut parrainer jusqu’à 25 filleuls. Au-delà, il ne gagnera plus de crédit de parrainage. Dès que la commande d’un filleul a été validée, le Client parrain bénéficie d’un crédit de parrainage venant abonder sa Cagnotte. Ce crédit expire 365 jours après sa création.\n" +
              "Un Client peut parrainer toute personne avec qui il entretient un lien personnel. Le Client accepte de ne pas se parrainer lui-même ou de faire un usage abusif de cette fonctionnalité.\n" +
              "La Société se réserve le droit de suspendre un compte ou d’annuler de manière unilatérale le(s) crédit(s) de parrainage ainsi que la promotion issus du parrainage dans le cas où celui-ci aurait été gagné suite à une erreur, une fraude ou en violation de des présentes conditions.\n"
        },
        rightOfWithdrawal: {
          title: "Droit de rétractation",
          content: "Conformément aux dispositions de l’article VI.73, 4° du Code de droit économique, le droit de rétractation applicable en matière de vente à distance ne peut être exercé dans le cas de la fourniture de biens qui, du fait de leur nature, sont susceptibles de se détériorer ou de se périmer rapidement. En application de ce texte, il est expressément indiqué que toute commande est ferme et définitive et que l’exercice du droit de rétractation est exclu. Le produit livré ne peut être ni repris, ni échangé.\n"
        },
        guarantee: {
          title: "Garantie",
          content: "Le Client bénéficie de la garantie légale de conformité et de la garantie légale contre les vices cachés sur les produits vendus, sous réserve d’une réclamation formulée auprès du service Client.\n" +
              "Le Client demeure seul responsable du choix des produits et de leur conservation. Toute garantie est exclue en cas de négligence, défaut d’entretien de la part du Client (notamment au regard du respect de la chaîne du froid) ou en cas d'événement de force majeure. La responsabilité de la Société ne saurait être engagée si l’inexécution ou la mauvaise exécution d’une commande est imputable au Client, ou liée à des contraintes techniques indépendantes de la volonté de la Société.\n"
        },
        personalData: {
          title: "Collecte et traitement des données à caractère personnelles",
          content: "Les données à caractère personnel du Client font l’objet d’un traitement automatisé aux fins de gestion et de suivi de la relation Clients et prospects, de prospection et d’animation commerciale et de gestion de la relation contractuelle entre la Société et chaque Client.\n" +
              "Les informations que nous recueillons proviennent de:\n" +
              "l’enregistrement de l’adresse e-mail de chaque Client permettant de recevoir la newsletter. Le Client peut à tout moment se désabonner de la newsletter en cliquant sur le lien intitulé « se désinscrire » qui figure sur chacune des newsletters\n" +
              "la saisie complète des coordonnées de chaque Client dans le formulaire de commande (nom, prénom, adresse email, numéro de téléphone, ...) de manière à pouvoir traiter sa commande\n" +
              "la correspondance qui est envoyée à la Société et à ses partenaires de manière à pouvoir traiter les demandes issue de cette correspondance\n" +
              "l’utilisation de l’ordinateur de chaque Client en mémorisant des informations transmises automatiquement par celui-ci quand il utilise le Site (notamment : cookies et adresse IP). La Société recueille des informations sur l’utilisation faite par chaque Client du Site afin d’obtenir des statistiques, notamment, sur le nombre de visiteurs sur le Site et de personnaliser et d’optimiser le contenu, la mise en page et les services proposés sur le Site.\n" +
              "Les données personnelles sont utilisées exclusivement dans le respect des finalités précitées et approuvées par chaque Client. L’objectif principal de la collecte de données personnelles est d’offrir des services sûrs, efficaces et personnalisés.\n" +
              "Les informations recueillies pourront éventuellement être communiquées à des tiers liés à la Société par contrat pour l’exécution de tâches sous-traitées nécessaires à la gestion de votre profil. Elles ne seront pas utilisées à d’autres fins dans ce contexte.\n" +
              "Les informations personnelles collectées sont destinées à la Société, responsable du traitement, et peuvent être transmises à nos partenaires commerciaux si vous avez coché la case autorisant cette transmission. Ainsi, la Société ne communique pas à des tiers vos données personnelles sauf si vous avez expressément donné votre consentement ou s’il existe pour la Société une obligation légale de le faire.\n" +
              "Ces tiers seront tenus d’utiliser vos informations personnelles identifiables uniquement dans le cadre des services qu’ils fournissent à la Société.\n" +
              "Enfin, en cas de fusion ou de rachat de la Société, les données personnelles pourront être transmises à l’acheteur ou à la société absorbante après que les clients en auront été informés par mail et par avertissement explicite sur le Site.\n" +
              "Les informations personnelles identifiables recueillies dans le cadre de l’utilisation du Site peuvent être stockées en île de france ou dans tout pays assurant un niveau de protection adéquat ou suffisant de la vie privée et des libertés et droits fondamentaux des personnes. En utilisant le Site, chaque Client accepte expressément le transfert vers la France et ailleurs des informations personnelles identifiables fournis à la Société.\n" +
              "Conformément aux règlement (UE) général sur la protection des données du 27 avril 2016 (RGPD), chaque Client bénéficie d’un droit d’accès, d’interrogation, de modification, de rectification et de suppression des données le concernant ainsi que d’un droit d’opposition pour motif légitime.\n" +
              "La Société archivera les bons de commandes et les factures qui constitueront des copies fiables résultant d’une reproduction à l’identique de la forme et du contenu de chaque bon de commande et facture.\n"
        },
        properties: {
          title: "Propriété intellectuelle et industrielle",
          content: "Tous les textes, commentaires, ouvrages, illustrations, signes distinctifs, bases de données et images reproduits sur le Site sont protégés par des droits de propriété intellectuelle. Toute utilisation ou reproduction, totale ou partielle, sur tout support et à toute fin, sans le consentement préalable et exprès de la Société, est interdite et pourra faire l'objet de poursuites en contrefaçon.\n"
        },
        applicableLaw: {
          title: "Loi applicable",
          content: "Les présentes CGV sont régies par la loi française. En cas de litige, le Client s’adressera en priorité à la Société afin de trouver une solution amiable, dans un délai d’un mois. A défaut, la compétence est attribuée aux tribunaux compétents de Paris.\n"
        },
        nullity: {
          title: "Nullité",
          content: "La nullité d’une clause contractuelle des présentes n’entraîne pas la nullité de la totalité des présentes, les clauses non annulées conservant leur plein effet. La clause concernée, ou une partie de celle-ci, est réputée automatiquement remplacée par une ou plusieurs dispositions valides et exécutoires se rapprochant le plus possible de l'intention initiale de la Société et le Client.\n"
        }
      },
    },
  }
};

export default locale;
