export const resumeData = {
  basics: {
    name: "Ansh Chandra",
    label: "Data Analyst",
    email: "anshchandra1818@gmail.com",
    phone: "7428555497",
    summary: "IT Engineering graduate with hands-on experience in data engineering, analytics, and dashboard development. Proficient in Python, SQL, ETL workflows, and creating interactive Power BI and Tableau dashboards. Worked with large datasets to automate pipelines, optimize queries, and deliver actionable insights through dynamic visualizations. Actively seeking data-focused roles where I can build scalable solutions and support impactful decision-making.",
    location: "Jaipur, India",
    profiles: [
      {
        network: "GitHub",
        url: "https://github.com/anshchandra1818-commits"
      },
      {
        network: "LinkedIn",
        url: "https://linkedin.com/in/ansh-chandra-2689b6281"
      }
    ]
  },
  work: [
    {
      company: "Airish Technologies",
      position: "Cloud Engineer",
      startDate: "January 2025",
      endDate: "April 2025",
      highlights: [
        "Advised clients on suitable AWS services and led end-to-end migration of 5+ websites/applications from on-premise and alternative cloud platforms to AWS, reducing infrastructure costs by 20 percent.",
        "Configured AWS infrastructure by using AWS services and ensured smooth deployment and testing, cutting average go-live time by 30 percent"
      ],
      metrics: ["20% Cost Reduction", "30% Faster Go-Live"]
    },
    {
      company: "Central Electronics Limited",
      position: "Data Analyst Intern",
      startDate: "December 2023",
      endDate: "January 2024",
      highlights: [
        "Cleaned and preprocessed a 3,000-row website traffic dataset using Azure Databricks, PySpark, Pandas, and NumPy, reducing data inconsistencies by 95%.",
        "Performed analysis of user sessions, engagement metrics, and traffic sources via PySpark aggregations and SQL queries, identifying 3 key drop-off points in the user journey.",
        "Built heatmaps, engagement trend charts, and traffic-pattern visualizations using Matplotlib and Seaborn, directly informing a content strategy that improved average session duration by 15%."
      ],
      metrics: ["95% Data Accuracy", "15% Session Increase"]
    },
    {
      company: "DRDO-Defence Research and Development Organisation",
      position: "Analyst",
      startDate: "June 2023",
      endDate: "September 2023",
      highlights: [
        "Extracted and cleaned a 4,000-datapoint dataset using Excel, reducing erroneous entries by 90 percent before loading into PostgreSQL for structured querying.",
        "Designed and delivered a fully dynamic Power BI dashboard connected to PostgreSQL, enabling real-time visualization of 10+ KPIs and cutting manual reporting time by 50%"
      ],
      metrics: ["90% Error Reduction", "50% Time Saved"]
    }
  ],
  projects: [
    {
      name: "Churn Prediction Model",
      description: "Built an end-to-end churn prediction pipeline on a 10,000-record bank customer dataset.",
      highlights: [
        "Built an end-to-end churn prediction pipeline on a 10,000-record bank customer dataset using Python (Pandas, NumPy, scikit-learn, TensorFlow) in Jupyter Notebook.",
        "Compared 4 classification algorithms (Logistic Regression, Random Forest, XGBoost, Neural Network); achieved 86% accuracy with the TensorFlow neural network — a 6% improvement over the baseline.",
        "Created EDA visualizations (heatmaps, churn distribution charts) using Matplotlib and Seaborn, surfacing top 5 churn drivers including tenure, balance, and product count."
      ],
      keywords: ["Python", "Pandas", "NumPy", "scikit-learn", "TensorFlow", "Jupyter Notebook"]
    },
    {
      name: "Sales Performance Dashboard (Power BI)",
      description: "Developed an interactive Power BI dashboard on a 5,000-row retail sales dataset.",
      highlights: [
        "Developed an interactive Power BI dashboard on a 5,000-row retail sales dataset, integrating slicers, drill-through pages, and DAX measures to track revenue, regional trends, and YoY growth.",
        "Connected to a PostgreSQL backend and used Power Query for data transformation, enabling automated daily refresh and eliminating manual Excel-based reporting."
      ],
      keywords: ["Power BI", "PostgreSQL", "Power Query", "DAX"]
    },
    {
      name: "SQL-Based E-Commerce Analysis",
      description: "Analyzed customer LTV, product return rates, and seasonal demand patterns using complex SQL.",
      highlights: [
        "Wrote 20+ complex SQL queries (CTEs, window functions, subqueries) on a multi-table e-commerce database to analyze customer LTV, product return rates, and seasonal demand patterns.",
        "Documented findings in a structured report with visualizations, identifying a 22% revenue opportunity from cross-sell recommendations."
      ],
      keywords: ["SQL", "CTEs", "Window Functions", "Data Analysis"]
    }
  ],
  skills: [
    {
      name: "Programming",
      keywords: ["Python", "SQL", "PySpark", "C/C++", "HTML/CSS"]
    },
    {
      name: "Libraries & Visualization",
      keywords: ["NumPy", "Pandas", "Matplotlib", "Seaborn"]
    },
    {
      name: "Databases",
      keywords: ["MySQL", "PostgreSQL", "Sql WorkBench"]
    },
    {
      name: "Cloud & Tools",
      keywords: ["AWS", "Jupyter Notebook", "PyCharm", "Power BI", "Power Query", "Databricks"]
    },
    {
      name: "Miscellaneous",
      keywords: ["Excel", "Word", "PowerPoint", "Microsoft Office", "Data Modeling", "Statistics"]
    },
    {
      name: "Soft Skills",
      keywords: ["Problem-solving", "Decision Making", "Strategic Planning", "Analytical Thinking"]
    }
  ],
  education: [
    {
      institution: "Manipal University Jaipur",
      area: "Information and Technology",
      studyType: "B.Tech",
      startDate: "2021",
      endDate: "2025"
    },
    {
      institution: "ASN Senior Secondary School",
      area: "Class 12th",
      endDate: "2020"
    },
    {
      institution: "ASN Senior Secondary School",
      area: "Class 10th",
      endDate: "2018"
    }
  ],
  certifications: [
    "Data Analytics Certificate – IIT Roorkee",
    "AWS Partner: Accreditation (Technical)"
  ],
  achievements: [
    {
      title: "86% Accuracy in Churn Prediction",
      context: "Achieved with TensorFlow neural network, a 6% improvement over baseline."
    },
    {
      title: "95% Reduction in Data Inconsistencies",
      context: "Cleaned 3,000-row dataset using PySpark and Azure Databricks."
    },
    {
      title: "50% Reduction in Reporting Time",
      context: "Automated dynamic Power BI dashboard for DRDO."
    },
    {
      title: "20% Infrastructure Cost Savings",
      context: "Led AWS migration for 5+ applications at Airish Technologies."
    }
  ]
};
