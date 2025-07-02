import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-dota-secondary/20 bg-dota-dark/95 backdrop-blur supports-[backdrop-filter]:bg-dota-dark/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Icon name="Sword" className="h-8 w-8 text-dota-purple" />
          <h1 className="text-2xl font-montserrat font-bold text-white">
            DotaTournament
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-dota-light hover:text-dota-purple transition-colors duration-200 font-roboto"
          >
            Главная
          </a>
          <a
            href="#"
            className="text-dota-light hover:text-dota-purple transition-colors duration-200 font-roboto"
          >
            Турниры
          </a>
          <a
            href="#"
            className="text-dota-light hover:text-dota-purple transition-colors duration-200 font-roboto"
          >
            Магазин
          </a>
          <a
            href="#"
            className="text-dota-light hover:text-dota-purple transition-colors duration-200 font-roboto"
          >
            Личный кабинет
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-dota-purple text-dota-purple hover:bg-dota-purple hover:text-white transition-all duration-300"
          >
            Войти
          </Button>
          <Button className="bg-dota-purple hover:bg-dota-secondary text-white transition-all duration-300">
            Регистрация
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-dota-light hover:text-dota-purple"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon name="Menu" className="h-6 w-6" />
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-dota-dark/95 backdrop-blur border-t border-dota-secondary/20 animate-in slide-in-from-top-5 duration-200">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="#"
              className="block text-dota-light hover:text-dota-purple transition-colors duration-200 font-roboto"
            >
              Главная
            </a>
            <a
              href="#"
              className="block text-dota-light hover:text-dota-purple transition-colors duration-200 font-roboto"
            >
              Турниры
            </a>
            <a
              href="#"
              className="block text-dota-light hover:text-dota-purple transition-colors duration-200 font-roboto"
            >
              Магазин
            </a>
            <a
              href="#"
              className="block text-dota-light hover:text-dota-purple transition-colors duration-200 font-roboto"
            >
              Личный кабинет
            </a>
            <div className="flex space-x-4 pt-4">
              <Button
                variant="outline"
                className="border-dota-purple text-dota-purple hover:bg-dota-purple hover:text-white transition-all duration-300"
              >
                Войти
              </Button>
              <Button className="bg-dota-purple hover:bg-dota-secondary text-white transition-all duration-300">
                Регистрация
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
