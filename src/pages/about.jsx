import React, { Component } from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
          <p>The Oregon Knowledge Bank (OKB) is a resource for and created by the public safety community in Oregon. The OKB focuses on Oregon: its innovative policing, corrections, and community supervision programs; research conducted on criminal justice initiatives here; and public safety agency profiles.</p>

          <p>Oregon’s 2014 Justice Reinvestment Act (HB 3194) strongly promotes the use of evidence-based practices and cost-effective programs. The statute charges the newly created Center for Policing Excellence (or CPE, an initiative of the Oregon Department of Public Safety Standards and Training) with fostering interaction between law enforcement researchers and practitioners. The law also holds the Oregon Criminal Justice Commission (CJC) responsible for tasks related to sharing information and encouraging the use of best practices throughout the state’s criminal justice system.</p>

          <p>In 2015, the CPE and CJC collaborated to design and develop the Oregon Knowledge Bank as a resource to fulfill these mandates.</p>

          <p>The OKB is guided by two complementary goals: The first is to become the go-to resource for criminal justice practitioners in Oregon for best and promising practices. The second goal is to encourage public safety practitioners statewide to use evidence-based practices and problem-solving methods.</p>
        <About />
      </div>
    );
  }
}

export default AboutPage;
