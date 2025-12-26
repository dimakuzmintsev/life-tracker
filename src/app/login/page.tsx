import React from "react";

export default function page() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="w-100 h-100 border-2 p-10">
        <div className="flex gap-5">
          <button className="text-2xl mb-5 border-2 hover:bg-amber-100">
            Авторизация
          </button>
          <button className="text-2xl mb-5 border-2 hover:bg-amber-100">
            Регистрация
          </button>
        </div>
        <div className="flex flex-col gap-10 mb-10">
          <div className="flex flex-col">
            <span>Логин</span>
            <input className="border-1" />
          </div>
          <div className="flex flex-col">
            <span>Пароль</span>
            <input className="border-1" />
          </div>
        </div>
        <button className="border-1 w-50 hover:bg-amber-100">Войти</button>
      </div>
    </div>
  );
}
