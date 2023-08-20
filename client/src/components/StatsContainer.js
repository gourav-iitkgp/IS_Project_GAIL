import { useAppContext } from '../context/appContext'
import StatItem from './StatItem'
import { FaCross, FaCalendarCheck, FaBug } from 'react-icons/fa'
import Wrapper from '../assets/wrappers/StatsContainer'

const StatsContainer = () => {
  const { stats } = useAppContext()

  const defaultStats = [
    {
      title: 'Working Motors',
      count: stats.working || 0,
      icon: <FaCalendarCheck />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'Not Working Motors',
      count: stats.interview || 0,
      icon: <FaCross />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'Faulty Motors',
      count: stats.declined || 0,
      icon: <FaBug />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
  ]

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatItem key={index} {...item} />
      })}
    </Wrapper>
  )
}

export default StatsContainer
