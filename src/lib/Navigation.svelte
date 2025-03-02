<script>
    import gsap from "gsap";

    const tl = gsap.timeline();
    
</script>

<nav class="navigation-bar">
    <img src="/src/assets/sbb.svg" alt="SBB organization logo" loading="lazy" />
    <ul>
        <li class="nav-link">Our services</li>
        <li class="nav-link">Vision</li>
        <li class="nav-link">Contact</li>
    </ul>
</nav>

<style>
    .navigation-bar {
        background-color: var(--brand-color-dark);
        min-height: 10dvh;
        margin-top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1rem;
    }

    .navigation-bar img {
        width: 10rem;
        height: auto;
        color: transparent;
    }

    .navigation-bar ul {
        list-style: none;
        display: flex;
        gap: 1.25rem;
    }

    .navigation-bar ul li {
        color: transparent;
        font-size: 1.5rem;
        font-weight: 600;
        position: relative;
        background: linear-gradient(
            45deg,
            var(--brand-color-light-gold),
            var(--brand-color-semi-gold)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        cursor: pointer;
        padding: 0 0 .1rem 0;
    }

</style>
