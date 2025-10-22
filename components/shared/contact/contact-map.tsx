export function ContactMap() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Visit Our Office
          </h2>
          <p className="text-lg text-muted-foreground">
            Stop by our office to discuss your real estate needs in person
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-border shadow-lg">
          <div className="aspect-21/9 w-full bg-muted">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7299.850600455192!2d90.3635476!3d23.8212552!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c133e05eeee5%3A0x9734b2c682f9422b!2sMuslim%20Bazar!5e0!3m2!1sen!2sbd!4v1761117857293!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
