// function getBotResponse(input){
//     //simple responses
//     if(input == ""){
//         return "You can you come again";
//     }
//     else if(input == "hello"){
//         return "Hello there, how can I help you today";
//     }else if(input == "goodbye"){
//         return "Talk to you later!";
//     }
//     else{
//         return "sorry I didn't get that";
//     }
// }

function getBotResponse(input, group) {
  const lowerInput = input.toLowerCase();

  const groupedKeywordResponses = {
    'Hosting Plans': {
      'hosting plan': 'Consider factors like your website\'s size, traffic, and technical requirements. Our support team is happy to guide you through the selection process',
      'upgrade my hosting plan': 'Absolutely! You can upgrade your hosting plan at any time to accommodate the growth of your website. Our seamless upgrade process ensures minimal downtime',
      'hosting plans': 'We offer a range of hosting plans, including shared hosting, VPS hosting, and dedicated hosting. Each plan is designed to meet different hosting needs.',
      'Thank you': 'Goodbye! If you have any account-related questions later, feel free to ask.',
      // Add more account setting keywords and responses as needed
    },
    ' Security': {
      'protect my website': 'We employ robust security measures, including SSL certificates, firewalls, and regular malware scans. Additionally, our hosting plans include automatic backups to safeguard your data.',
      'customer support available': 'Yes, our customer support team is available 24/7 to assist you. Whether you have technical questions or need help with your account, we\'re here to provide prompt and reliable support.',
      'security of my website': 'You can enhance your website\'s security by regularly updating software, using strong passwords, and enabling two-factor authentication. Our knowledge base provides detailed guides on security best practices.',
      // Add domain payment keywords and responses as needed
    },
    'Domain and Website Management': {
      'transfer my existing domain': 'Transferring your domain is easy! Follow the instructions in our knowledge base, or reach out to our support team for step-by-step guidance through the process.',
      'install custom applications': 'Yes, you have the flexibility to install and run custom applications or content management systems (CMS) on your hosting account. We support a wide range of popular platforms.',
      'limit on the number of websites': 'The number of websites you can host depends on your hosting plan. Review the details of each plan to determine the allowed number of domains and websites.',
      // Add hosting plans keywords and responses as needed
    },
    'Uptime and Reliability':{
      'uptime guarantee': 'We guarantee a 99.9% uptime for our hosting services. Our infrastructure is designed for reliability, and we have proactive monitoring to address any issues promptly.',
      'keyworde': 'Yes, we provide tools and resources for you to monitor the uptime and performance of your website. You can also set up notifications for downtime alerts.',
      'monitor the uptime': 'Scheduled maintenance and updates are performed during off-peak hours to minimize disruption. We notify customers in advance about any planned maintenance that may affect their services.',
    },
    'Billing and Payments':{
      'payment methods': 'We accept a variety of payment methods, including credit cards, PayPal, and other secure online payment options. You can choose the method that suits you best during the checkout process.',
      'billing cycle': 'Billing cycles vary based on the hosting plan. You can choose monthly, quarterly, or annual billing. We offer discounts for longer billing cycles.',
    },

    // Add more groups as needed
  };

  // Check if the specified group exists
  if (group in groupedKeywordResponses) {
    // Check if any keyword is present in the input string for the specified group
    for (const keyword in groupedKeywordResponses[group]) {
      if (lowerInput.includes(keyword)) {
        return groupedKeywordResponses[group][keyword];
      }
    }
  }

  // If no keyword is found in the specified group, return a default response
  return "I'm not sure how to respond to that, please ask again or contact info@upperlink.com for clarifications";
}

