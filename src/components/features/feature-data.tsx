import CustomizableIcon from "../icons/customizable-icon";
import DeviceIntegrationIcon from "../icons/device-integration-icon";
import LeadManagementIcon from "../icons/lead-management-icon";
import OneClickGenerationIcon from "../icons/one-click-generation-icon";
import SetupIcon from "../icons/setup-icon";
import customizableSrc from "../../assets/images/customizable.webp";
import deviceIntegrationSrc from "../../assets/images/device_integration.webp";
import leadManagementSrc from "../../assets/images/lead_management.webp";
import oneClickWebsiteSrc from "../../assets/images/one_click_website.webp";
import setupSrc from "../../assets/images/setup.webp";
import { FeatureItem } from "../../domain/feature-item";

export const featureItems: FeatureItem[] = [
    {
        title: "Complete Device Integration",
        description: "Deliver consistent content across all digital touchpoints, from large wall screens to mobile devices.",
        icon: <DeviceIntegrationIcon />,
        image: deviceIntegrationSrc,
        desktopClass: "max-h-[40.625rem]",
        mobileIcon: <DeviceIntegrationIcon className="w-[50px]"/>,
    },
    {
        title: "Fast and Easy Setup",
        description: "Enhance your marketing suite within 2 days with our intuitive admin portal. Say goodbye to long, costly bespoke development processes.",
        icon: <SetupIcon />,
        image: setupSrc,
        desktopClass: "max-w-[59.375rem]",
        mobileClass: "max-w-[19.5rem]",
        mobileIcon: <SetupIcon  className="w-[50px]"/>,
    },
    {
        title: "Fully Customizable",
        description: "Tailor the look and feel of your marketing materials with our flexible theme and color system, creating a bespoke-like experience for every development.",
        icon: <CustomizableIcon />,
        image: customizableSrc,
        desktopClass: "w-full",
        mobileIcon: <CustomizableIcon  className="w-[50px]"/>,
    },
    {
        title: "One Click Website Generation",
        description: "Launch a fully optimized, SEO-ready website for your development with no extra setup.",
        icon: <OneClickGenerationIcon />,
        image: oneClickWebsiteSrc,
        desktopClass: "max-w-[50.1875rem]",
        mobileClass: "max-w-[18.5rem]",
        mobileIcon: <OneClickGenerationIcon  className="w-[50px]"/>,
    },
    {
        title: "Lead Management & Analytics",
        description: "Gain valuable insights with our comprehensive analytics tools designed to enhance your sales strategy. An easy-to-use, focused CRM takes place to track your prospects and communicate throughout your sales and marketing teams.",
        icon: <LeadManagementIcon />,
        image: leadManagementSrc,
        desktopClass: "max-w-[50.1875rem]",
        mobileClass: "max-w-[18.5rem]",
        mobileIcon: <LeadManagementIcon  className="w-[50px]"/>,
    }
]