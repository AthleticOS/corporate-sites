// ALPHA LAUNCH BANNER COMPONENT
class AlphaBanner extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="fixed top-0 left-0 right-0 h-10 bg-secondary text-deep-void z-[60] flex items-center justify-center px-4">
            <p class="font-ui text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-wider text-center w-full truncate">
                ALPHA LAUNCH PHASE: Limited Founding Partner positions remaining for the 2026 Cycle.
                <a href="https://bayermedia.net/founding-partner-protocol" target="_blank" class="underline underline-offset-2 hover:opacity-80 ml-1">[View Partnership Terms &rarr;]</a>
            </p>
        </div>
        `;
    }
}
customElements.define('alpha-banner', AlphaBanner);

// GLOBAL HEADER COMPONENT
class GlobalHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="fixed top-10 w-full z-50 bg-[#1A1A1A]/70 backdrop-blur-md border-b border-white/5">
            <div class="container mx-auto px-4 h-[90px] md:h-28 flex items-center justify-between">
                <a class="flex items-center gap-2" href="/">
                    <img src="https://vibe.filesafe.space/1777786939579445963/attachments/af2317c7-3b7b-427b-8314-24984696e9e7.png" alt="AthleticOS Logo" class="h-[72px] md:h-[108px] w-auto object-contain">
                </a>
                <div class="flex items-center gap-4">
                    <div class="hidden md:flex items-center gap-4">
                        <a class="font-ui text-[14px] text-foreground hover:text-secondary transition-colors" href="/legal">Legal</a>
                        <span class="text-white/20 select-none">|</span>
                        <a href="https://portal.athleticos.net/login" target="_blank" class="font-ui text-[14px] text-foreground hover:text-secondary transition-colors">Partner Portal</a>
                        <span class="text-white/20 select-none">|</span>
                    </div>
                    <a href="#audit" class="inline-flex items-center justify-center rounded-md font-ui uppercase tracking-[1px] font-bold bg-primary text-deep-void hover:bg-secondary transition-colors whitespace-nowrap text-xs px-4 h-9">
                        Initialize Audit
                    </a>
                </div>
            </div>
        </header>
        `;
    }
}
customElements.define('global-header', GlobalHeader);

// GLOBAL FOOTER COMPONENT
class GlobalFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="bg-background border-t-2 border-primary pt-16 pb-8">
            <div class="container mx-auto px-4">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <div class="space-y-6">
                        <h4 class="font-ui text-lg uppercase tracking-widest font-bold text-foreground">The Blueprint</h4>
                        <div class="flex flex-col space-y-3">
                            <a href="/#architecture" class="font-body text-foreground/70 hover:text-secondary transition-colors">System Blueprint</a>
                            <a href="/#logic" class="font-body text-foreground/70 hover:text-secondary transition-colors">Data Sovereignty</a>
                            <a href="/#ecosystem" class="font-body text-foreground/70 hover:text-secondary transition-colors">Performance Stack</a>
                            <a href="/#engine" class="font-body text-foreground/70 hover:text-secondary transition-colors">Command Logic</a>
                        </div>
                    </div>
                    <div class="space-y-6">
                        <h4 class="font-ui text-lg uppercase tracking-widest font-bold text-foreground">Governance</h4>
                        <div class="flex flex-col space-y-3">
                            <a href="/legal" class="font-body text-foreground/70 hover:text-secondary transition-colors">Terms of Service</a>
                            <a href="/legal" class="font-body text-foreground/70 hover:text-secondary transition-colors">Privacy Policy</a>
                            <a href="/#standards" class="font-body text-foreground/70 hover:text-secondary transition-colors">PDPA/GDPR Compliance</a>
                            <a href="https://bayermedia.net" target="_blank" class="font-body text-foreground/70 hover:text-secondary transition-colors">Institutional Governance</a>
                        </div>
                    </div>
                    <div class="space-y-6">
                        <h4 class="font-ui text-lg uppercase tracking-widest font-bold text-foreground">Access & Support</h4>
                        <div class="flex flex-col space-y-3">
                            <a href="https://portal.athleticos.net/login" class="font-body text-foreground/70 hover:text-secondary transition-colors">Partner Portal</a>
                            <a href="/#audit" class="font-body text-foreground/70 hover:text-secondary transition-colors">Initialize Audit</a>
                            <a href="/#engine" class="font-body text-foreground/70 hover:text-secondary transition-colors">Partner Documentation</a>
                        </div>
                        <div class="pt-4 space-y-2">
                            <p class="font-ui text-sm text-[#F5F8F1]/70"><span class="font-bold text-foreground">Entity:</span> AthleticOS | A Division of Bayer Media Services</p>
                            <p class="font-ui text-sm text-[#F5F8F1]/70"><span class="font-bold text-foreground">Address:</span> 2578 Broadway, New York, NY 10025</p>
                            <p class="font-ui text-sm text-[#F5F8F1]/70"><span class="font-bold text-foreground">Support:</span> <a href="mailto:support@athleticos.net" class="hover:text-primary transition-colors">support@athleticos.net</a></p>
                        </div>
                    </div>
                </div>
                <div class="border-t border-white/10 pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                    <div class="max-w-3xl space-y-4">
                        <div class="flex items-center gap-3 opacity-50">
                            <img src="https://assets.cdn.filesafe.space/w6yl5bCMqSFns8z4MHRt/media/6937bf41aba1f67abec45673.png" alt="Bayer Media Services" class="h-12 w-12 object-contain grayscale">
                            <span class="font-ui uppercase tracking-widest text-sm">Governing Architect</span>
                        </div>
                        <p class="font-body text-sm text-foreground/50 leading-relaxed">
                            AthleticOS is a high-performance integrated ecosystem engineered and governed by Bayer Media Services. All stateless logic deployments and data protocols are subject to the Sovereign Architect Protocol.
                        </p>
                    </div>
                    <div class="flex flex-wrap gap-4 lg:justify-end">
                        <div class="px-3 py-1.5 rounded-full border border-white/10 bg-black/40 flex items-center gap-2">
                            <span class="font-ui font-bold text-[10px] uppercase tracking-wider text-foreground/50">Zero-Retention Logic</span>
                        </div>
                        <div class="px-3 py-1.5 rounded-full border border-white/10 bg-black/40 flex items-center gap-2">
                            <span class="font-ui font-bold text-[10px] uppercase tracking-wider text-foreground/50">Google Workspace Native</span>
                        </div>
                        <div class="px-3 py-1.5 rounded-full border border-white/10 bg-black/40 flex items-center gap-2">
                            <span class="font-ui font-bold text-[10px] uppercase tracking-wider text-foreground/50">FERPA/GDPR Sovereign</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}
customElements.define('global-footer', GlobalFooter);
