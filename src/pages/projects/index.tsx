import Card from "@/components/base/Card";
import MainLayout from "@/components/layouts/MainLayout";
import React from "react";
import LedgerlyLogo from "../../../public/images/ledgerly_logo.jpeg";
import ConGeniusLogo from "../../../public/images/congenius_logo.png";
import PlandaBudgetImage from "../../../public/images/planda_budget_image.png";
function index() {
  return (
    <MainLayout>
      <Card
        image={LedgerlyLogo}
        title="Ledgerly"
        description="I developed a responsive mobile/desktop application for my senior capstone project. I worked on it for 250 hours over the course of one semester, and used / learned a variety of technologies. I used React JS for the front end and Node JS for the back end. I wrote custom CSS for all the styling, and used a MySQL database for data persistence. For my hosting stack, I used an RDS instance on AWS for the database, and an AWS Elastic Beanstalk environment to host the back end. I hosted the front end on Google Firebase. This project is an accounting platform that enables users to intuitively manage financial records, accounting systems, and reporting through the lifecycle of their business.
"
        buttonTitle="Read More"
        imageSide="left"
      />
      <Card
        image={ConGeniusLogo}
        title="ConGenius"
        description="I worked for this local startup for 6 months as a full stack developer. The tech stack included React JS, TypeScript, TailwindCSS, postgreSQL, and Redux and RTK Query. The hosting platform was Vercel and Supabase. I build reusable components for use throughout the app, primarily focused on data visualization and layout for the website's dashboard. I built chart components, project tracking tools, and project stage workflows. This included building UI components, implementing correct data flow with Redux / RTK Query, and necessary modifications with the database."
        buttonTitle="Read More"
        imageSide="right"
      />
      <Card
        image={PlandaBudgetImage}
        title="Budget Cents"
        description="This is a personal project that is currently in development. I am building a personal budgeting tool that allows users to define a budget, then track their income and expenses against their financial goals. This includes a balance between manual interaction and automation. My tech stack includes Next JS, TypeScript, TailwindCSS, postgreSQL, Zustand, React Query, several UI libraries including daisyUI, Radix, and HeadlessUI, and API interactions with Plaid, Stripe, React PDF Viewer, and Sendgrid. Deployment stack includes vercel and supabase for the time being, but I have intentions of switching to a node server and hosting on AWS and Google Firebase."
        buttonTitle="Read More"
        imageSide="left"
      />
    </MainLayout>
  );
}

export default index;
