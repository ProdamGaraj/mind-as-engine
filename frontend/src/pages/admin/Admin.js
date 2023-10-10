import "../admin/admin.scss";
import { FormNews } from "../../component/form/fromNews";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Header3 } from "../../component/header3/Header3";

export const Admin = () => {
  return (
    <>
    <Header3/>
      <main className="adminPage container container-admin">
      <div className="admin__public">
        <div className="public__title flex justif-ss-betw align-cent">
          <p>Новая публикация</p> 
          <button>
            Отмена
          </button>
        </div>
      </div>
        <FormNews />
    </main>
    </>
    
  );
};
