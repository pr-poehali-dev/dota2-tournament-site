import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dota-dark via-dota-tertiary/20 to-dota-dark overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(155,135,245,0.1),transparent_70%)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(110,89,165,0.15),transparent_70%)] animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="space-y-8 animate-in fade-in-0 slide-in-from-bottom-10 duration-1000">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Icon
              name="Trophy"
              className="h-12 w-12 text-dota-purple animate-bounce"
            />
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold text-white">
              Dota 2
            </h1>
            <Icon
              name="Zap"
              className="h-12 w-12 text-dota-light animate-pulse"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-montserrat font-semibold text-dota-light">
            Турнирная платформа
          </h2>

          <p className="text-xl text-dota-light/80 max-w-2xl mx-auto font-roboto leading-relaxed">
            Участвуй в турнирах, завоевывай титулы, получай призы. Лучшая
            платформа для киберспортивных соревнований.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button
              size="lg"
              className="bg-dota-purple hover:bg-dota-secondary text-white px-8 py-6 text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-dota-purple/25"
            >
              <Icon name="Play" className="mr-2 h-5 w-5" />
              Начать играть
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-dota-light text-dota-light hover:bg-dota-light hover:text-dota-dark px-8 py-6 text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              <Icon name="Calendar" className="mr-2 h-5 w-5" />
              Посмотреть турниры
            </Button>
          </div>

          <div className="flex justify-center space-x-8 mt-16 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-dota-purple font-montserrat">
                1,250+
              </div>
              <div className="text-sm text-dota-light/70 font-roboto">
                Активных игроков
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-dota-purple font-montserrat">
                48
              </div>
              <div className="text-sm text-dota-light/70 font-roboto">
                Турниров в месяц
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-dota-purple font-montserrat">
                ₽2.5M
              </div>
              <div className="text-sm text-dota-light/70 font-roboto">
                Призовой фонд
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" className="h-8 w-8 text-dota-light/50" />
      </div>
    </section>
  );
}
