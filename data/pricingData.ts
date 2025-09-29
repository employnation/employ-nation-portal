export const pricingPackages = {
  jobSeekers: [
    {
      name: "Starter",
      price: "₹499",
      duration: "/month",
      features: [
        "Apply to 50 jobs/month",
        "Resume visibility: Medium",
        "Basic job alerts",
        "Profile analytics dashboard",
        "AI Resume Builder",
        "Priority application",
        "Career coaching sessions"
      ],
      recommended: false,
      color: "blue"
    },
    {
      name: "Professional", 
      price: "₹999",
      duration: "/month",
      features: [
        "Unlimited job applications",
        "Resume visibility: High",
        "Advanced job alerts",
        "Premium profile analytics",
        "AI Resume Builder",
        "Priority application",
        "Career coaching sessions"
      ],
      recommended: true,
      color: "indigo"
    },
    {
      name: "Executive",
      price: "₹1999", 
      duration: "/month",
      features: [
        "Unlimited job applications",
        "Resume visibility: Top",
        "Custom job alerts",
        "Advanced profile analytics",
        "AI Resume Builder + Review",
        "Priority application",
        "4 Career coaching sessions"
      ],
      recommended: false,
      color: "purple"
    }
  ],
  employers: [
    {
      name: "Recruiter",
      price: "₹4999",
      duration: "/month", 
      features: [
        "5 job postings/month",
        "100 resume views",
        "Basic candidate search",
        "Company profile",
        "AI candidate matching",
        "Priority support",
        "Advanced analytics"
      ],
      recommended: false,
      color: "green"
    },
    {
      name: "Business",
      price: "₹9999", 
      duration: "/month",
      features: [
        "15 job postings/month",
        "Unlimited resume views",
        "Advanced candidate search",
        "Enhanced company profile",
        "AI candidate matching",
        "Priority support",
        "Basic analytics dashboard"
      ],
      recommended: true,
      color: "blue"
    },
    {
      name: "Enterprise",
      price: "₹19999",
      duration: "/month", 
      features: [
        "Unlimited job postings",
        "Unlimited resume views",
        "Premium candidate search",
        "Featured company profile",
        "Advanced AI candidate matching",
        "24/7 Dedicated support",
        "Advanced analytics suite"
      ],
      recommended: false,
      color: "purple"
    }
  ]
};

export const packageBenefits = {
  jobSeekers: {
    title: "Find Your Dream Job Faster",
    subtitle: "Choose the plan that fits your career goals",
    cta: "Start Your Job Search"
  },
  employers: {
    title: "Hire Top Talent Efficiently", 
    subtitle: "Streamline your recruitment process",
    cta: "Start Hiring"
  }
};