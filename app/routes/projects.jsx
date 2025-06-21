import { Outlet } from "@remix-run/react";
import Layout from "../components/Layout";

export default function ProjectsLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
} 