import Navbar from 'components/Navbar'
import { MainLayout as StyledMainLayout } from './styled'

const MainLayout: React.FC = ({ children }) => {
    return (
        <StyledMainLayout>
            <Navbar />
            {children}
        </StyledMainLayout>
    )
}

export default MainLayout