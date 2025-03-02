<script>
    import { onMount } from "svelte";
    import { handleSliderNavigation } from "./animations/Services.svelte";

    const services = $state([
        {
            title: "Accounting and Bookkeeping",
            active: false,
            details: [
                {
                    title: "Accurate Financial Management",
                    description:
                        "Precise transaction recording, reconciliations, and financial reporting.",
                },
                {
                    title: "Customized Solutions",
                    description:
                        " Implementation and optimization of bookkeeping systems for efficiency and compliance.",
                },
            ],
        },

        {
            title: "Taxation",
            active: false,
            details: [
                {
                    title: "Tax Planning and Compliance",
                    description:
                        "Strategies to minimize liabilities and ensure full regulatory adherence.",
                },
                {
                    title: "Expert Navigation",
                    description:
                        "Proactive advice on evolving tax laws tailored for entrepreneurial businesses.",
                },
            ],
        },

        {
            title: "Assurance",
            active: true,
            details: [
                {
                    title: "Strategic Audits",
                    icon: "fa-solid fa-chess-queen",
                    description:
                        "Identifying trends and actionable insights for operational businesses",
                },
                {
                    title: "Risk Mitigation",
                    icon: "fa-solid fa-minimize",
                    description:
                        "Enhancing internal controls and minimizing financial discrepancies.",
                },
            ],
        },

        {
            title: "Legal Advisory",
            active: false,
            details: [
                {
                    title: "Corporate Governance",
                    description:
                        "Assistance with registration, complaince and operational challenges",
                },
                {
                    title: "Regulatory Navigation",
                    description:
                        "Enhacing internal controls and minimizing financial discrepancies.",
                },
            ],
        },

        {
            title: "Tailored Business Solutions",
            active: false,
            details: [
                "Comprehensive services designed for entrepreneurial and private businesses, addressing their unique needs.",
            ],
        },
    ]);

    let activeService = $derived(services.find((service) => service.active));
    let activeServiceDetails = $derived(activeService.details);

    onMount(() => {
        handleSliderNavigation(services.indexOf(activeService));
    });

    const changeActiveService = (index) => {
        services.forEach((service, i) => {
            if (i === index) service.active = true;
            else service.active = false;
        });

        handleSliderNavigation(index);
    };
</script>

<article class="articles-wrapper">
    <section role="heading" aria-level="3">
        <h3 class="services-heading">What do we do?</h3>
    </section>

    <section>
        <article class="services-container">
            <!--serives navigation handler-->
            <div class="service-navigator">
                <span class="navigation-slider-bar"></span>
                <div class="markers">
                    {#each { length: services.length } as _, index (index)}
                        <i
                            role="button"
                            class={`fa-solid fa-map-pin ${services[index].active && "active"}`}
                            onclick={() => changeActiveService(index)}
                        >
                        </i>
                    {/each}
                </div>
            </div>

            <div class="title">
                <h4>{activeService.title}</h4>
            </div>

            <div class="cards-container">
                {#each activeServiceDetails as detail}
                    <div class="card">
                        <i class={detail?.icon}></i>
                        <h5>{detail?.title}</h5>
                        <p>{detail?.description}</p>
                    </div>
                {/each}
            </div>
        </article>
    </section>
</article>

<style>
    :root {
        --slider-width: 0;
    }

    .articles-wrapper {
        min-height: 40dvh;
        padding: 7.5% 5%;
    }
    .services-heading {
        color: white;
        text-align: center;
        font-size: 3.5rem;
    }

    .services-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 2.5rem;
    }

    .service-navigator {
        width: 80%;
        display: flex;
        justify-content: center;
        padding: 2rem 0 0 0;
        position: relative;
    }

    .navigation-slider-bar {
        display: block;
        width: 100%;
        height: 1rem;
        background-color: grey;
        border-radius: 0.5rem;
        position: relative;
        overflow: hidden;
    }

    .navigation-slider-bar::before {
        height: 0.99rem;
        width: var(--slider-width);
        background: linear-gradient(
            45deg,
            var(--brand-color-light-gold),
            var(--brand-color-semi-gold),
            var(--brand-color-dark-gold)
        );
        z-index: 10;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        content: "";
        transition: width 0.5s ease-in-out;
        border-radius: 0 0.5rem 0.5rem 0;
    }

    .markers {
        position: absolute;
        top: 0;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        z-index: 2;
    }

    .markers i {
        font-size: 1.5rem;
        background: linear-gradient(
            90deg,
            var(--brand-color-semi-gold),
            var(--brand-color-light-gold)
        );
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        opacity: 0.65;
        cursor: pointer;
    }

    i.active {
        font-size: 2rem;
        opacity: 1;
    }

    .title {
        margin-top: 2rem;
        font-size: 2rem;
        background: linear-gradient(
            45deg,
            var(--brand-color-semi-gold),
            var(--brand-color-light-gold)
        );
        color: transparent;
        background-clip: text;
        -webkit-background-clip: text;
        border: 0.1rem solid var(--brand-color-dark-gold);
        border-radius: 0.75rem;
        padding: 0.5rem 1rem;
    }

    .cards-container {
        margin-top: 4.5rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5rem;
    }

    .card {
        background: linear-gradient(
            30deg,
            var(--brand-color-semi-gold),
            var(--brand-color-light-gold)
        );
        width: 20rem;
        height: 20rem;
        box-sizing: border-box;
        padding: 2.5rem;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        gap: 1rem;
    }

    .card i {
        font-size: 2.75rem !important;
        color: var(--brand-color-dark-gold);
        border: 0.1rem solid var(--brand-color-dark-gold);
        border-radius: 50%;
        padding: 0.85rem;
    }

    .card h5 {
        font-size: 1.5rem;
    }

    .card p {
        font-size: 1.15rem;
    }
</style>
