import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
function HomeLayout() {
  const navigation = useNavigation();
  const isPageLaoding = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isPageLaoding ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  );
}

export default HomeLayout;
