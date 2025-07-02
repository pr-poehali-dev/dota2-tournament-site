import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function TournamentsSection() {
  const tournaments = [
    {
      id: 1,
      name: "Winter Championship 2024",
      status: "Регистрация открыта",
      statusColor: "bg-green-500",
      prize: "₽150,000",
      participants: "64/128",
      startDate: "15 декабря",
      format: "Single Elimination",
      difficulty: "Pro",
    },
    {
      id: 2,
      name: "New Year Cup",
      status: "Скоро",
      statusColor: "bg-yellow-500",
      prize: "₽75,000",
      participants: "32/64",
      startDate: "28 декабря",
      format: "Double Elimination",
      difficulty: "Amateur",
    },
    {
      id: 3,
      name: "Spring Masters",
      status: "Идет",
      statusColor: "bg-dota-purple",
      prize: "₽200,000",
      participants: "128/128",
      startDate: "1 марта",
      format: "Swiss System",
      difficulty: "Pro",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-dota-dark to-dota-tertiary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-in fade-in-0 slide-in-from-bottom-6 duration-700">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
            Активные турниры
          </h2>
          <p className="text-xl text-dota-light/80 max-w-2xl mx-auto font-roboto">
            Присоединяйся к турнирам и покажи свое мастерство
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {tournaments.map((tournament, index) => (
            <Card
              key={tournament.id}
              className="bg-dota-dark/60 border-dota-secondary/30 hover:border-dota-purple/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-dota-purple/10 animate-in fade-in-0 slide-in-from-bottom-6 duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                  <Badge
                    className={`${tournament.statusColor} text-white text-xs`}
                  >
                    {tournament.status}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-dota-light border-dota-light/30"
                  >
                    {tournament.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-montserrat text-white">
                  {tournament.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Trophy" className="h-4 w-4 text-dota-purple" />
                    <span className="text-dota-light font-roboto">
                      Призовой фонд
                    </span>
                  </div>
                  <span className="text-dota-purple font-bold font-montserrat">
                    {tournament.prize}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" className="h-4 w-4 text-dota-light" />
                    <span className="text-dota-light font-roboto">
                      Участники
                    </span>
                  </div>
                  <span className="text-dota-light font-roboto">
                    {tournament.participants}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" className="h-4 w-4 text-dota-light" />
                    <span className="text-dota-light font-roboto">Старт</span>
                  </div>
                  <span className="text-dota-light font-roboto">
                    {tournament.startDate}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Icon name="Gamepad2" className="h-4 w-4 text-dota-light" />
                    <span className="text-dota-light font-roboto">Формат</span>
                  </div>
                  <span className="text-dota-light font-roboto text-sm">
                    {tournament.format}
                  </span>
                </div>

                <Button
                  className="w-full bg-dota-purple hover:bg-dota-secondary text-white transition-all duration-300 mt-6"
                  disabled={tournament.status === "Идет"}
                >
                  {tournament.status === "Идет"
                    ? "Турнир идет"
                    : "Зарегистрироваться"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-dota-purple text-dota-purple hover:bg-dota-purple hover:text-white transition-all duration-300 px-8 py-6"
          >
            <Icon name="Plus" className="mr-2 h-5 w-5" />
            Посмотреть все турниры
          </Button>
        </div>
      </div>
    </section>
  );
}
