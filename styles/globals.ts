"use client";

import localFont from "next/font/local";
import { createGlobalStyle } from "styled-components";

const geistSans = localFont({
	src: "./../public/fonts/GeistVF.woff",
	weight: "400 500",
});

const GlobalStyles = createGlobalStyle`
	*,
	*::after,
	*::before {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	:root {		
		--font-family: ${geistSans.style.fontFamily};

        --font-regular-12: 400 0.75rem/1rem var(--font-family);
        --font-regular-14: 400 0.875rem/0.875rem var(--font-family);
        --font-regular-16: 400 1rem/1rem var(--font-family);
        --font-regular-24: 400 1.5rem/1.5rem var(--font-family);
        --font-regular-40: 400 2.5rem/2.5rem var(--font-family);
		
        --font-medium-12: 500 0.75rem/1rem var(--font-family);
        --font-medium-14: 500 0.875rem/0.875rem var(--font-family);
        --font-medium-16: 500 1rem/1rem var(--font-family);
        --font-medium-24: 500 1.5rem/1.5rem var(--font-family);
        --font-medium-40: 500 2.5rem/2.5rem var(--font-family);

		--color-red-10: #330A11;
		--color-red-40: #6F101B;
		--color-red-80: #E2162A;
		--color-red-90: #FF565F;
		--color-green-100: #D8FFE4;
		--color-blue-70: #006EFE;
		--color-gray-100: #161616;
		--color-gray-90: #262626;
		--color-gray-80: #393939;
		--color-gray-50: #8D8D8D;
		--color-gray-0: #FFFFFF;

		--spacing-4: 0.25rem;
		--spacing-8: 0.5rem;
		--spacing-12: 0.75rem;
		--spacing-16: 1rem;
		--spacing-20: 1.25rem;
		--spacing-24: 1.5rem;
		--spacing-32: 2rem;
		--spacing-40: 2.5rem;
		--spacing-48: 3rem;
		--spacing-64: 4rem;
	}
	html {
		font-size: 100%;
	}
	body {
		color: var(--color-gray-0);
		background: var(--color-gray-100);

		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}	
	a {
		color: inherit;
		text-decoration: none;
	}
	ul {
		list-style: none;
	}
	img {
		display: block;
		max-width: 100%;
	}
	button {
		cursor: pointer;
	}
	input,
	select,
	button {
		border: none;
		outline: none;
		color: inherit;
		appearance: none;
		background: transparent;
	}
	a,
	input,
	button,
	select {
		&:focus-visible {
			outline-offset: 2px;
			outline: 2px solid var(--color-gray-0);
		}
	}
`;

export default GlobalStyles;
