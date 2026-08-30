const LOGO = 'https://lh3.googleusercontent.com/aida/AEtjO1V3YTd0EZhkovLBfRz0CmDVthaA9Z4aeBDSUw2ZzBnuWsPOlvmvLEPNGhJ_sth1cExJc0OREnOQ8NnLkY_TET_RhnqzpRlNGnEALLPU5ThblHV1lrKoZGWVwNqJn8VyRjamH9uxct0pF1SwPW1BtsU4lLB0oBsWR-OVk58DEjdhtoxQNb83zTVpi9LhdL-STQHEg0A14UpAYIQB2tXfQBr2QAyrBBKcrsJElajTFhYa-WTWixTO81Dy_gbq'

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-highest py-xl">
      <div className="w-full px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-lg">
        <div className="space-y-md">
          <div>
            <img alt="Upsala Trips" className="h-10 w-auto mb-sm" src={LOGO} />
            <p className="font-headline-sm text-primary">UPSALA TRIPS</p>
          </div>
          <p className="text-on-surface-variant font-body-md">Curated adventure travel across the Patagonia region and beyond.</p>
        </div>
        <div className="flex flex-col gap-sm">
          <h4 className="font-label-md text-primary uppercase tracking-wider">Navigation</h4>
          <a className="text-on-surface-variant hover:text-secondary font-body-md" href="#">About Us</a>
          <a className="text-on-surface-variant hover:text-secondary font-body-md" href="#">Expeditions</a>
          <a className="text-on-surface-variant hover:text-secondary font-body-md" href="#">Safety Protocol</a>
        </div>
        <div className="flex flex-col gap-sm">
          <h4 className="font-label-md text-primary uppercase tracking-wider">Contact</h4>
          <p className="text-on-surface-variant font-body-md">info@upsalatrips.com</p>
          <p className="text-on-surface-variant font-body-md">+54 11 4832-0000</p>
          <p className="text-on-surface-variant font-body-md">Buenos Aires, Argentina</p>
        </div>
        <div className="flex flex-col gap-sm">
          <h4 className="font-label-md text-primary uppercase tracking-wider">Follow Us</h4>
          <div className="flex gap-md">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:text-secondary">share</span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:text-secondary">public</span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:text-secondary">camera</span>
          </div>
        </div>
      </div>
      <div className="mt-xl pt-lg border-t border-outline-variant/30 text-center text-on-surface-variant font-label-md px-margin-desktop">
        © 2024 UPSALA TRIPS. ALL RIGHTS RESERVED.
      </div>
    </footer>
  )
}
