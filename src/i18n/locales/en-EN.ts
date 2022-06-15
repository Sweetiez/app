const locale = {
  translation: {
    common:{
      showMore: 'Show More',
      showLess: 'Show Less',
      euros : "€"
    },
    form:{
      incorrectEmail: 'Please fill in a correct email',
      incorrectPassword: 'Please fill in a correct password',
      incorrectFirstname: 'Please fill in a correct firstname',
      incorrectLastname: 'Please fill in a correct firstname',
      fillPasswords: "Please fill the current, new password and password confirm inputs",
      blankInputs: "Please fill all the mandatory inputs (first and last name, email)",
      blankInputsWithPassword: "Please fill all the mandatory inputs (first and last name, email, password)",
      passwordPlaceholder: "Password",
      newPasswordPlaceholder: "New Password",
      currentPasswordPlaceholder: 'Current Password',
      passwordConfirmPlaceholder: "Confirm Password",
      emailPlaceholder: "Email",
      firstnamePlaceholder:"Firstname",
      lastnamePlaceholder:"Lastname",
      phonePlaceholder:'Phone number',
      incorrectPhone: 'Incorrect phone number'
    },
    tabBar:{
      sweets: "Sweets",
      recipes: "Recipes",
      events:"Events",
      cart: "Cart",
      account:"Account"
    },
    forgotPassword:{
      title: "Forgotten Password?",
      login: "Log In",
      validate: "Recover my Password"
    },
    login:{
      title: "Already registered? Sign in",
      forgotPassword: "Forgot Password?",
      signIn: "Sign In",
      dontHaveAccount: "Don't have an account? ",
      register: "Register",
      loginError : "Login failed"
    },
    register: {
      title: "Register",
      alreadyHaveAccount: "Already have an account? ",
      login: "Sign in",
      register: "Register",
      registerError: "Registration failed"
    },
    shop:{
      title: "Sweets",
      noProducts: "No product"
    },
    details:{
      comment : "Comment",
      add: "Add"
    },
    events:{
      title: "TODO events title"
    },
    recipes:{
      title: "Recipes",
      noRecipes: "No recipes"
    },
    recipe:{
      minutes: "min",
      totalTime: "Total time : ",
      preparation: "Preparation",
      chill:"Chill",
      cook:"Cook",
      cost: "Cost",
      level:"Level",
      portions:"Portions",
      steps: "Steps : ",
      difficulty:{
        noob: "Beginner",
        easy: "Easy",
        normal: "Normal",
        hard: "Hard"
      }
    },
    cart:{
      title: "Your Cart",
      quantity: "quantity : ",
      empty: "You have nothing in your cart yet ! ",
      checkout: "Checkout "
    },
    comment:{
      title: "Comment",
      send: 'Send',
      commentPlaceholder: 'Your comment',
      errorStar: 'Please choose a rating',
      commentError: "There was an error with publishing the comment",
      report: "Report"
    },
    account:{
      title: "Hello ",
      logout: "Logout",
      edit: "Edit info",
      firstname: "Firstname : ",
      lastname: "Lastname : ",
      email: "Email : ",
      phone: "Phone : ",
      unknown: "Unknown",
      editPassword: "Edit Password",
      orders: "Your orders"
    },
    editAccount:{
      title: "Edit your info",
      save: "Save",
      error: "An error occurred saving your info"
    },
    editPassword:{
      title: "Edit your password"
    },
    errorModal:{
      title: "Oops !",
      content: "An error occurred... Check your internet connexion.",
      close: "Close"
    },
    reportModal:{
      title: "Report this comment",
      content: "Please select a reason for reporting this comment in the list below",
      send: "Send",
      cancel: "Cancel",
      reason: {
        choose: "Choose a reason",
        uncivil: "Uncivil, rude or vulgar",
        discrimination: "Discrimination",
        localBusiness: "Third party deal site",
        illegalContent: "Contains illegal content or activity",
        other: "Other..."
      },
      error: 'An error occurred, please try again later',
      errorAlreadyMade: 'You have already reported this comment'
    },
    orders:{
      title: "Your orders",
      empty: "You have no commands yet",
      orderedOn: "Ordered on : ",
      orderSchedule: "Order scheduled for : ",
      items: "Items : ",
      totalPrice: "Total price : ",
      status: {
        ordered: "ORDERED",
        paid: "PAID",
        created: "CREATED",
        delivered: "DELIVERED",
        ready: "READY",
        unknown: "Status unknown"
      }
    },
    filters:{
      title: 'Filters',
      filtersModal: {
        title: "Filters",
        rating: "Rating",
        price: "Price",
        filter: "Filter",
        clear: "Reset filters",
        close: "Close",
        category: "Category",
        categories:{
          sweety:"Sweety",
          salty:"Salty",
          mix: "Mix"
        }
      }
    },
    cgu: {
      title: "Terms of service",
      cgv: {
        title: "General Terms and Conditions of Sale",
        content: "These general terms and conditions of sale (GTC) apply to all sales made on the present Fi.Sweets website. They set out the rights and obligations of the Parties in the context of the sale of sweets on the Internet and are concluded between :\n" +
            "on the one hand FI.Sweets with a capital of 1€, located at 13 rue romy Scneider, 94490 Ormesson sur marne.\n" +
            "on the other hand, the Customer or any other person, individual or company, visiting or making a purchase via the Site (hereinafter referred to as the \"Customer\").\n" +
            "The Company and the Client are referred to together as the \"Parties\".\n",
        accept: {
          title: "Acceptance of the general conditions of sale",
          content: "The acceptance of these conditions is unconditional on the part of the Customer.\n" +
              "The GTC are an integral part of our offer and are systematically brought to the attention of every Customer prior to placing an order. They shall prevail over any other conditions contained in any other document (information provided directly, advertising materials, descriptions, etc.).\n" +
              "Any contrary condition opposed by the Client will be unenforceable against the Company, regardless of the time at which it may have been brought to our attention.\n" +
              "No handwritten or electronic signature is required to commit the Client, the fact that the latter ticks the box \"I have read the general terms and conditions of sale and I accept them\" before validating his order automatically entails his express acceptance of these GTC.\n" +
              "The applicable GTC are those in force on the day of the order placed by the Client. The Company reserves the right to modify these GTC without prior notice. These will then be applicable to sales made after the modification.\n"
        },
        serviceAccess: {
          title: "Accessibility of services",
          content: "The Website is accessible 24 hours a day, 7 days a week, unless it is interrupted, whether or not by the Company. The Company shall not be held responsible for any damage, of whatever nature, resulting from the unavailability of the Website.\n" +
              "The provision of the Client's account does not give the Client any rights or create any obligations for the Company.\n" +
              "The transmission of information via the Internet may not be totally secure. Although the Company takes all steps required by law to protect all Client information on its Website, the Company cannot guarantee that the transmission of data to our Website is secure. Such transmission is at the Client's risk.\n"
        },
        customerService: {
          title:"Customer service and complaints",
          content:"For any questions or complaints, our customer service is at the disposal of our customers. We invite our customers to inform us of their complaints as soon as possible so that we can offer them a suitable solution. The means of contact are as follows:\n" +
              "Mail: fi.sweets.94@gmail.com\n"
        },
        products: {
          title: "Products and availability",
          content:"The Company prepares, markets online and delivers dishes for the benefit of individuals and companies. The Company's services are reserved for the Client, of legal age, for his own consumption. The resale of the products marketed by the Company is strictly forbidden\n" +
              "The products offered for sale comply with the regulations and standards in force in France and/or the European Union on the date of their delivery. Each product is accompanied by a description enabling the Client to know its composition in accordance with Article L. 111-1, 1° of the Consumer Code.\n" +
              "It is the Customer's responsibility to obtain information prior to any order, particularly in the event of food intolerance or allergies.\n" +
              "The products are prepared by hand.\n" +
              "The products are delivered cold. Their consumption may be deferred provided that the Use By date (\"DLC\") indicated on the packaging is respected and that they are kept in the refrigerator between 0° and 4°. It is the Client's responsibility to reheat the delivered products that require it according to the instructions and recommendations appearing on the Website.\n" +
              "The Company shall not be held responsible in the event of poor storage conditions of the products after delivery, in the event of consumption after the use-by date or in any other case where the Client has not complied with the hygiene rules brought to its attention by the Company or by the health authorities.\n" +
              "The Company reserves the right to modify the composition of a product, in particular depending on the availability of ingredients. It will inform the Clients concerned in advance, particularly in the event of a change in ingredients leading to the presence of an additional allergen. The Company undertakes to offer a suitable solution to the Client on request if he/she is inconvenienced by this substitution, including the replacement, insofar as possible and in any case until stocks are exhausted, or reimbursement of the modified products.\n" +
              "The photographs and illustrations presented online are suggestions for presentation.\n" +
              "The Company reserves the right to modify its offer at any time and without notice. Consequently, the products in our offer are available as long as they appear on the Site and within the limits of stocks. In the event of unavailability of the product after the order has been placed, the Client will be informed by e-mail, and no payment will be debited; if the payment has already been debited, it will be refunded.\n" +
              "Certain products ordered by the Client may no longer be available on the scheduled delivery date due to unforeseeable events (e.g., gasoline shortage), climatic hazards, or the unavailability of products from suppliers for any other reason. In this case, the Company will inform the customer as soon as possible by e-mail, SMS or telephone and will propose an alternative solution or a total or partial refund of the order.\n"
        },
        orders: {
          title: "Orders",
          content: "To place an order, the Customer must create an account, choose a user name and a password, to be kept strictly confidential, to which he/she will associate his/her first name, surname, a precise delivery address and an operational mobile telephone number in order to allow the order to be delivered as soon as possible.\n" +
              "To this end, the Client undertakes to provide sincere, true and up-to-date information at the time of placing the order. The Company shall not be held responsible for the consequences resulting from erroneous or incomplete data, in particular in the details of the recipient, the quantities and type of products ordered, or the account to be debited.\n" +
              "The Company confirms the acceptance of the Client's order by e-mail.\n" +
              "The Company reserves the right to request additional information from the Client, and to suspend an order in the event of alleged misuse of its services.\n" +
              "The Company reserves the right not to proceed with an order in the event of any unforeseen event. In such circumstances, no costs will be charged to the Client. In this case, the Company will inform the Client by any means.\n" +
              "The contractual information, presented to the Client in French, will be confirmed at the time of validation of the order.\n" +
              "The Client is entirely responsible for the information provided when the order is registered. Consequently, our liability shall not be sought or incurred in the event that the Company is unable to deliver or execute the order due to errors, inaccuracies or omissions relating to this information.\n" +
              "The Client who wishes to order one or more products must\n" +
              "Log in by identifying himself when placing the order, or create a personal account.\n" +
              "To do so, he/she must fill in the registration form and the delivery details on which he/she will indicate all the contact details requested.\n" +
              "The Customer is also required to choose a password which must remain confidential and not be disclosed to a third party. The Customer remains responsible for the use of his/her account and password.\n" +
              "Fill in the online shopping basket by selecting the products chosen\n" +
              "Validate the order after having checked it, and in particular the place of delivery, as well as the date and time of delivery selected\n" +
              "Make the payment in accordance with the conditions provided\n" +
              "Confirm the order and payment\n" +
              "Prior to the conclusion of the contract, the Company informs the Client, in accordance with Article L.221-5 of the Consumer Code, of the following\n" +
              "Information on the essential characteristics of the product ordered by the Client\n" +
              "The price of the product and the terms of payment\n" +
              "The delivery costs according to the delivery address and the chosen delivery time slot\n" +
              "The date of availability or delivery of the product\n" +
              "Information about the Company, in particular its postal and telephone details\n" +
              "The information that the Client does not benefit from the right of withdrawal on perishable products\n" +
              "The assumption of responsibility by you for the cost of returning non-perishable products in the event that you exercise your right of withdrawal\n" +
              "A reminder of the existence of a legal guarantee of conformity for the products\n" +
              "Information on after-sales service and commercial guarantees\n" +
              "The conditions for terminating the contract\n" +
              "The total amount of the order (price before tax, price including tax, shipping costs or the indication that there are no shipping costs).\n"
        },
        orderControl: {
          title: "Order control",
          content: "In order to prevent fraudulent use of payment methods, Customer accounts and delivery addresses, and to strengthen the security of Customer transactions, the Company reserves the right to carry out checks on orders placed by its Customers.\n" +
              "The Company may therefore ask each Client to send it documents proving the authenticity of its identity and/or domicile (identity card, proof of domicile such as an electricity or fixed telephone bill), whether the Client is a natural or legal person.\n" +
              "In the context of these checks, if the supporting documents are not sent to the Company or if the documents sent do not make it possible to establish with certainty the identity of the person placing the order and the reality of the address, the Company reserves the right not to validate the order.\n" +
              "The supporting documents will only be kept for the time required to process the Client's request.\n"
        },
        prices: {
          title: "Prices",
          content: "The prices of the products, expressed in euros and including all taxes but excluding delivery and transport costs, taking into account the VAT rate applicable on the day of the order, are those in force. The Company reserves the right to modify the prices at any time.\n" +
              "The products will be invoiced on the basis of the tariff in force at the time of the order. Delivery costs, when applicable, are indicated in the order summary under the heading \"delivery costs\".\n"
        },
        payment: {
          title: "Payment and non-payment",
          content: "The price is payable in cash on the day the order is validated by the Customer.\n" +
              "Payment is made either : \n" +
              "by credit card (Carte Bleue, Visa, Mastercard, Amex) via our Stripe payment platform, in a secure environment using a data encryption process that ensures confidentiality \n" +
              "via Paypal\n" +
              "in cash\n" +
              "each of which actively participates in the security of the transactions.\n" +
              "The amount subject to payment is equal to the amount of the order minus the amount of the discounts granted by the Company at the time of the order. \n" +
              "Payment is therefore made directly between the Client and the payment platform. The information transmitted by the Client from his/her computer is not shared with the Company's employees or with third parties.\n" +
              "The contact details can be saved with the acceptance of the Client, which means that the Client will not need to communicate this information for each new order. The payment will be debited to the already stored payment method of his/her choice.\n" +
              "In the event of refusal by the bank payment centre concerned, the order will be automatically refused. In case of non-validated payment, the Client must contact his bank and/or the Company's customer service.\n" +
              "In the event of unpaid orders, the order will be cancelled.\n"
        },
        discounts: {
          title: "Discounts",
          content: "Specific offers may be put in place within the framework of commercial agreements with certain partners. These are subject to special conditions and allow certain customers to benefit from discounts on their bill (delivery costs or products) according to specific contractually defined terms.\n"
        },
        complianceOnDelivery: {
          title: "Compliance on delivery",
          content: "It is the customer's responsibility to check the products at the time of delivery. Consequently:\n" +
              "In the event of missing or damaged products, the client must make all necessary observations upon receipt of the products to the Company's Customer Service Department so that a solution can be found as soon as possible.\n" +
              "In the event of non-conformity of the products delivered in relation to the products ordered, the Client must formulate his/her complaints in writing, as soon as he/she is able to do so, upon receipt of the products to the Company.\n" +
              "The communication channels have been specified in the Customer Service and Complaints section.\n"
        },
        sponsorship: {
          title: "Sponsorship",
          content: "The Company offers its Customers the opportunity to sponsor their friends and close circles to introduce them to the service offered. Each Customer who has placed a first order has a referral code that he/she can share with his/her friends.\n" +
              "At the time of their first order, new Customers have the possibility of entering a sponsorship code allowing them to benefit from a promotion. This sponsorship code cannot be combined with any other promotion. It is only valid if the new Customer has never previously ordered from the Site.\n" +
              "The purpose of sponsorship is to introduce the Site to friends and family. A Customer may sponsor up to 25 friends. Beyond that number, he will no longer earn sponsorship credit. As soon as the order of a sponsored person has been validated, the sponsored Customer benefits from a sponsorship credit which will be added to his Kitty. This credit expires 365 days after its creation.\n" +
              "A Customer may sponsor any person with whom he/she has a personal link. The Client agrees not to sponsor himself or herself or to misuse this feature.\n" +
              "The Company reserves the right to suspend an account or unilaterally cancel the sponsorship credit(s) and the promotion resulting from the sponsorship in the event that it has been earned as a result of an error, fraud or in violation of these conditions.\n"
        },
        rightOfWithdrawal: {
          title: "Right of withdrawal",
          content: "Conformément aux dispositions de l’article VI.73, 4° du Code de droit économique, le droit de rétractation applicable en matière de vente à distance ne peut être exercé dans le cas de la fourniture de biens qui, du fait de leur nature, sont susceptibles de se détériorer ou de se périmer rapidement. En application de ce texte, il est expressément indiqué que toute commande est ferme et définitive et que l’exercice du droit de rétractation est exclu. Le produit livré ne peut être ni repris, ni échangé.\n"
        },
        guarantee: {
          title: "Guarantee",
          content: "The Customer benefits from the legal guarantee of conformity and the legal guarantee against hidden defects on the products sold, subject to a complaint being made to the Customer Service Department.\n" +
              "The Customer remains solely responsible for the choice of products and their conservation. Any guarantee is excluded in the event of negligence, lack of maintenance on the part of the Client (particularly with regard to compliance with the cold chain) or in the event of an event of force majeure. The Company shall not be held liable if the non-execution or poor execution of an order is attributable to the Client, or linked to technical constraints beyond the Company's control.\n"
        },
        personalData: {
          title: "Collection and processing of personal data",
          content: "The Client's personal data is subject to automated processing for the purposes of managing and monitoring the Client and prospective Client relationship, prospecting and sales promotion and managing the contractual relationship between the Company and each Client.\n" +
              "The information we collect comes from\n" +
              "the registration of the e-mail address of each Client allowing them to receive the newsletter. The Client can unsubscribe from the newsletter at any time by clicking on the link entitled \"unsubscribe\" which appears on each newsletter\n" +
              "the complete entry of each Client's details in the order form (surname, first name, email address, telephone number, etc.) so that the order can be processed\n" +
              "correspondence sent to the Company and its partners in order to be able to process the requests resulting from this correspondence\n" +
              "the use of each Client's computer by memorising information automatically transmitted by the Client when using the Site (in particular: cookies and IP address). The Company collects information on the use made by each Client of the Site in order to obtain statistics, in particular, on the number of visitors to the Site and to personalise and optimise the content, layout and services offered on the Site.\n" +
              "Personal data is used exclusively for the purposes mentioned above and approved by each Client. The main purpose of collecting personal data is to provide safe, efficient and personalised services.\n" +
              "The information collected may be communicated to third parties linked to the Company by contract for the execution of subcontracted tasks necessary for the management of your profile. It will not be used for any other purpose in this context.\n" +
              "The personal information collected is intended for the Company, which is responsible for processing it, and may be transmitted to our commercial partners if you have ticked the box authorising such transmission. The Company will not share your personal data with third parties unless you have expressly given your consent or the Company is under a legal obligation to do so.\n" +
              "These third parties will be required to use your personally identifiable information only in connection with the services they provide to the Company.\n" +
              "Finally, in the event of a merger or acquisition of the Company, personal information may be transferred to the acquiring company or purchaser after customers have been notified by email and by explicit notice on the Site.\n" +
              "Personally identifiable information collected in the context of the use of the Site may be stored in Ile de France or in any country ensuring an adequate or sufficient level of protection of the privacy and fundamental rights and freedoms of individuals. By using the Site, each Client expressly agrees to the transfer to France and elsewhere of personally identifiable information provided to the Company.\n" +
              "In accordance with the General Data Protection Regulation (EU) of 27 April 2016 (RGPD), each Client has the right to access, question, modify, rectify and delete data concerning him/her, as well as the right to object on legitimate grounds. \n" +
              "The Company shall archive the order forms and invoices which shall constitute reliable copies resulting from an identical reproduction of the form and content of each order form and invoice.\n"
        },
        properties: {
          title: "Intellectual and industrial property",
          content: "All texts, comments, works, illustrations, distinctive signs, databases and images reproduced on the Site are protected by intellectual property rights. Any use or reproduction, in whole or in part, on any medium and for any purpose, without the prior and express consent of the Company, is prohibited and may result in legal action for infringement. \n"
        },
        applicableLaw: {
          title: "Applicable law",
          content: "These GTC are governed by French law. In the event of a dispute, the Client shall first contact the Company in order to find an amicable solution within one month. Failing this, jurisdiction is given to the competent courts of Paris."
        },
        nullity: {
          title: "Nullity",
          content: "The nullity of a contractual clause of the present contract does not entail the nullity of the whole of the present contract, the clauses not cancelled retaining their full effect. The clause in question, or part of it, shall be deemed automatically replaced by one or more valid and enforceable provisions that come as close as possible to the original intention of the Company and the Client. \n"
        }
      },
    },
  },
};

export default locale;
