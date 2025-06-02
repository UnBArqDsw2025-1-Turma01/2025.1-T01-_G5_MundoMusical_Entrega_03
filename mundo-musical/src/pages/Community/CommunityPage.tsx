import React from 'react'
import { MessageCircle, GraduationCap, Users, BookOpen } from 'lucide-react'
import { Link } from 'react-router-dom'
import HomeMenu from '@/components/HomeMenu'

interface OptionCardProps {
  icon: React.ReactNode
  title: string
  description: string
  colorClass: string
}

const OptionCard = ({ icon, title, description, colorClass }: OptionCardProps) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex items-start space-x-4 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
    <div className={`${colorClass}`}>
      {icon}
    </div>
    <div>
      <h3 className="text-base font-semibold text-gray-800">{title}</h3>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
  </div>
)

const ProgressSection = () => {
  const level = 5
  const currentXP = 85
  const maxXP = 100
  const progressPercent = (currentXP / maxXP) * 100

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-medium text-gray-700">Seu progresso</h2>
        <span className="text-sm font-semibold text-gray-600">Nível {level}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-blue-500 h-full transition-width duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>
      <p className="mt-1 text-xs text-gray-500">{currentXP}/{maxXP} XP</p>
    </div>
  )
}

const CommunityGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
    <Link to="/comunidade/forum" className="block">
      <OptionCard
        icon={<MessageCircle size={32} />}
        title="Fórum da Comunidade"
        description="Tire suas dúvidas acessando o fórum"
        colorClass="text-blue-500"
      />
    </Link>

    <OptionCard
      icon={<GraduationCap size={32} />}
      title="Suas Turmas"
      description="Acesse as turmas que você está matriculado"
      colorClass="text-green-500"
    />
    <OptionCard
      icon={<Users size={32} />}
      title="Encontre Alunos"
      description="Interaja com outros alunos"
      colorClass="text-red-500"
    />
    <OptionCard
      icon={<BookOpen size={32} />}
      title="Material"
      description="Acesse todos os materiais disponíveis no Mundo Musical"
      colorClass="text-purple-500"
    />
  </div>
)

export const CommunityPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-grow max-w-2xl mx-auto px-4 py-8 pb-16">
        <ProgressSection />
        <CommunityGrid />
      </div>
      <HomeMenu />
    </div>
  )
}

export default CommunityPage
