import Image from "next/image"
import { Button } from "@/components/ui/button"
import logo from "./assets/Logo.svg"
import { Input } from "@/components/ui/input"
import woman from "./assets/woman.svg"
import { Check } from "lucide-react"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <main>
      <section className="container mx-auto text-center pb-20 px-2 md:px-0">
        <nav className="flex justify-between tems-center py-4">
          <Image src={logo} alt="Livro Saas"/>
          <div className="items-center gap-2 hidden md:flex">
            <Button variant = "link">Funcionamento</Button>
            <Button variant = "link">Preço</Button>
            <Button variant= "bg-white">Login</Button>
          </div>
        </nav>
        <h1 className= "md:text-6xl text-2xl font-bold mt-8 md:-16">  Simplifique Seus Estudos </h1>
        <p className = "text-gray-500 mt-4 md:text-xl text-sm max-w 3xl mx-auto"> Deixe que nós fazemos a curadoria para você. Assine nossa plataforma e receba todos os meses um ebook novo de programação.</p>
        <form className = "mt-10 md:mt-16">
          <div className = "flex justify-center gap-20">
            <Input type= "email" placeholder= "Digite seu e-mail"/>
            <Button variant="bg-black">Assine Agora</Button>
          </div>
          <p className= ""> Comece sua assinatura agora mesmo. Cancele quando quiser. </p>
        </form>
      </section> 
      <section>
        <div>
          <h1>Como funciona?</h1>
          <div>
            <Image src={woman} alt = "Moça com Livros"/>
            <ul>
              <li> Acesso a 1 ebook por mês
                <Check size= {24}/>
                </li>
              <li> Curadoria especial
                <Check size= {24}/>
              </li>
              <li> Cancele quando quiser
                <Check size= {24}/>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section>
        <h2> Preço Simples e Transparente</h2>
        <p> Pra que inúmeros planos quando nós sabemos exatamente o que é melhor para você? Assine o nosso plano mensal Pro Premium VIP e garanta mensalmente um ebook novo de programação. E por menos de um café por dia. </p>
        <Card>
      <CardHeader>
        <CardTitle>Plano Pro Premium</CardTitle>
        <CardDescription>Tudo que você precisa para seus estudos</CardDescription>
      </CardHeader>
      <CardContent>
        <p>R$29 <span>/mês</span></p>
        <ul>
          <li>
              1 ebook por mês
          </li>
          <li>
              Curadoria especial
          </li>
          <li>
              Acesso ilimitado
          </li>
          <li>
              Cancele a qualquer momento
          </li>
          <Button variant="bg-black">Assine Agora</Button>
        </ul>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
      </section>
      <section>
        <h2> Pronto Para Mudar Sua Vida?</h2>
        <p>Faça como milhares de outras pessoas. Assine nosso produto e tenha garantido seus estudos </p>
        <Button variant = "bg-black"> Assine Agora </Button>
        <p> Comece sua assinatura agora mesmo. Cancele quando quiser. </p>
        <footer> 
        <Image src={logo} alt="Livro Saas"/>
        <p> © 2024 LivroSaaS. Todos os direitos reservados.</p>
        </footer>
      </section>
    </main>
  ) 
}
