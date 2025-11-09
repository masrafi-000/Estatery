const ContactHero: React.FC = () => {
   return (
    <section className="relative overflow-hidden bg-linear-to-br from-primary/10 via-background to-accent/10 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Get in Touch</h1>
          <p className="text-pretty text-lg text-muted-foreground md:text-xl">
            Have questions about a property or our services? We&apos;re here to help. Reach out to our team and we&apos;ll get
            back to you as soon as possible.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactHero