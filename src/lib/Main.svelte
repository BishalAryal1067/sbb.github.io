<script>
    import { onMount } from "svelte";
    import MainSectionBackgroud from "./partials/MainSectionBackgroud.svelte";
    import { runMainSectionAnimation } from "./animations/Main.svelte";

    onMount(() => runMainSectionAnimation());
</script>

<main class="hero-section">
    <!--<Navigation --class="navigation-bar" />-->
    <div class="container">
        <img
            src="/src/assets/sbb.svg"
            alt="SBB organization logo"
            loading="lazy"
            class="brand-logo"
        />
        <span class="separator"></span>
        <p class="brand-tagline">
            Empowering Growth Through Tailored Solutions
        </p>
        <button class="explore" onclick={() => console.log("explore")}
            >Explore</button
        >
    </div>

    <MainSectionBackgroud />
</main>


<style>
    main {
        overflow: hidden;
        max-width: 100%;
        position: relative;
        background: transparent;
    }
    .container img {
        width: 300px;
        height: auto;
        opacity: 0;
        transform: translateY(50px);
    }

    .container {
        position: relative;
        height: 90dvh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: transparent;
    }

    .container .separator {
        width: 250px;
        height: 2px;
        background-color: var(--brand-color-semi-gold);
        margin: 1rem 0;
    }

    .container .brand-tagline {
        opacity: 0;
        color: #ffffff;
        font-size: 3.5rem;
        font-weight: 600;
        text-align: center;
        background: linear-gradient(
            45deg,
            var(--brand-color-light-gold),
            var(--brand-color-semi-gold)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        cursor: pointer;
    }

    .explore {
        background-color: var(--brand-color-semi-gold);
        color: white;
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        font-weight: 600;
        border: none;
        border-radius: 5px;
        margin-top: 1rem;
        cursor: pointer;
    }
</style>
