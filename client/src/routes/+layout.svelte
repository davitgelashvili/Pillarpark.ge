<script lang="ts">
	import favicon from '#lib/assets/favicon.svg';
	import type { LayoutProps } from './$types';
	import Header from '#lib/layout/Header.svelte';
	import Footer from '#lib/layout/Footer.svelte';
	import Menu from '#lib/layout/Menu.svelte';
	import Loader from '#lib/layout/Loader.svelte';
	import { page } from '$app/state';
	import { isLightHeaderPage } from '#lib/layout/theme.ts';
	import '../styles/owl.carousel.min.css';
	import '../styles/owl.theme.default.min.css';
	import '../styles/bootstrap-grid.css';
	import '../styles/styles.scss';

	let { children }: LayoutProps = $props();

	$effect(() => {
		document.body.classList.toggle('page', !isLightHeaderPage(page.url.pathname));
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Header />
{@render children()}
<Footer />
<Menu />
<Loader />