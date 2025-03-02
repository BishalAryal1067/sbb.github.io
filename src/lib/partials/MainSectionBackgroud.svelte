<div class="background-wraaper">
    <div class="rectangles-wrapper">
        <div class="small-left">
            <div class="small-left-inner"></div>
        </div>

        <div class="middle-rectangle"></div>
    </div>

    <div class="dots-wrapper">
        {#each { length: 3 } as _, index (index)}
            <div class="dots-row">
                <!--dots for the decoration :D-->
                {#each { length: 6 } as _, index (index)}
                    <span class="dot"></span>
                {/each}
            </div>
        {/each}
    </div>

    <div class="right-side-patterns">
       <div class="pattern-rectangle"></div>
    </div>
</div>

<style>
    .background-wraaper {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: var(--brand-color-dark);
        z-index: -1;
    }

    .rectangles-wrapper {
        position: absolute;
        left: 0;
        top: 0;
    }

    .small-left {
        width: 10rem;
        height: 10rem;
        background: #595959;
        position: absolute;
        top: -0.5rem;
        left: -7.5rem;
        transform: rotate(35deg);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.65;
        z-index: 1;
    }

    .small-left-inner {
        width: 80%;
        height: 80%;
        border: 0.1rem solid var(--brand-color-light-gold);
    }

    .middle-rectangle {
        width: 12rem;
        height: 12rem;
        border: 0.85rem solid var(--brand-color-semi-gold);
        transform: rotate(35deg);
        position: absolute;
        top: -4.65rem;
        left: -3.5rem;
        z-index: -1;
    }

    .right-side-patterns {
        position: absolute;
        right: -20rem;
        top: -2rem;
        transform: rotate(20deg);
        width: 30rem;
        height: 20rem;
        background: #595959;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.25;
    }

    .right-side-patterns .pattern-rectangle {
        border: 0.25rem solid var(--brand-color-light-gold);
        width: 80%;
        height: 80%;
        position: absolute;
        top: 50%;
        right: 0;
    }

    .dots-wrapper {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        position: absolute;
        max-width: fit-content;
        right: 0.75rem;
        bottom: 0.75rem;
    }

    .dots-row {
        display: flex;
        gap: 0.75rem;
    }

    .dot {
        display: block;
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        background-color: grey;
    }
</style>
