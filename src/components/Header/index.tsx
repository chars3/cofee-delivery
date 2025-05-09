import { useEffect, useState } from 'react'
import { HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export function Header() {
  const [location, setLocation] = useState<string | null>(null)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords

        try {
          const response = await axios.get(
            `https://nominatim.openstreetmap.org/reverse`,
            {
              params: {
                format: 'json',
                lat: latitude,
                lon: longitude,
              },
            },
          )

          const city = response.data.address.city || response.data.address.town
          const state =
            response.data.address.state || response.data.address.region

          setLocation(`${city}, ${state}`)
        } catch (error) {
          console.error('Erro ao buscar localização:', error)
        }
      },
      (error) => {
        console.error('Erro de geolocalização:', error)
        setLocation('Localização não disponível')
      },
    )
  }, [])

  return (
    <HeaderContainer>
      <img src={logo} alt="Logo" />
      <nav>
        <span>
          <MapPin size={22} weight="fill" />
          {location ?? 'Localização...'}
        </span>
        <NavLink to="/checkout" aria-label="Cart" title="Checkout">
          <ShoppingCart size={32} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
