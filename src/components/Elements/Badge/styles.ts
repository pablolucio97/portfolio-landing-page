import styled from 'styled-components'

interface BadgeProps {
    textVariant?: 'light' | 'dark'
    badgePrimaryColor?: string
    badgeSecondaryColor?: string
}

export const Container = styled.div<BadgeProps>`
display: flex;
justify-content: center;
align-items: center;
padding: 8px;
margin: 4px;
border-radius: 64px;
background-image: linear-gradient(to right, 
${({ theme, badgePrimaryColor }) => badgePrimaryColor ?
        badgePrimaryColor : theme.colors.primary}, 
${({ theme, badgeSecondaryColor }) => badgeSecondaryColor ?
        badgeSecondaryColor : theme.colors.secondary});
`

export const Title = styled.span<BadgeProps>`
font-size: ${({ theme }) => theme.sizes.normal};
font-weight: 700;
text-align: center;
color: ${({ theme, textVariant }) =>
        textVariant === 'light' ?
            theme.colors.white100 :
            theme.colors.black500};
@media (max-width: 720px) {
font-size: ${({ theme }) => theme.sizes.small};
}
`