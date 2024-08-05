// src/routes.jsx
import React from "react";

import { MdHome } from "react-icons/md";
import Home from "../Public/Home";
import DynamicComp from "../../assets/DynamicComps/DynamicComp";

const AdRoutes = [
    {
        name: "DynamicComp",
        layout: "/",
        path: "DynamicComp",
        icon: <MdHome />,
        component: <DynamicComp />,
    },
    // Add more routes here as needed
];

export default AdRoutes;