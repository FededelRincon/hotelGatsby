import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

import Navegacion from './Nav';

const EnlaceHome = styled(Link)`
    color: #FFF;
    text-align: center;
    text-decoration: none;
`;


const Header = ({ siteName }) => {

    const year = new Date().getFullYear();

    return (
        <>
            <header
                css={css`
                    background-color: rgba(44, 62, 80);
                    padding: 4rem;
                `}
            >
                <div
                    css={css`
                        max-width: 1200px;
                        margin: 0 auto;

                        @media (min-width: 768px) {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                        }
                    `}
                >
                    {/* <Navegacion /> */}
                    <p
                        css={css`
                            color: #FFF;
                            /* padding: 1rem; */
                        `}
                    >
                        { siteName } . Todos los derechos Reservados { year } &copy;
                    </p>

                    <EnlaceHome to="/" >
                        <h1>
                            Hotel Gatsby + GraphQL
                        </h1>
                    </EnlaceHome>


                </div>
            </header>
        </>
    );
}
 
export default Header;