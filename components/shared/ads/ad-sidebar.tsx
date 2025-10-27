"use client"

import { motion } from "framer-motion"

export function AdSidebar() {
  return (
    <aside className="space-y-6">
      {/* Ad Slot 1 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-lg border border-border bg-card p-4 overflow-hidden"
      >
        <div className="mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Advertisement</div>
        <div className="aspect-video bg-linear-to-br from-primary/10 to-primary/5 rounded-md flex items-center justify-center border border-border/50">
          <div className="text-center">
            <div className="text-sm font-medium text-muted-foreground">Google Ad Space</div>
            <div className="text-xs text-muted-foreground/70 mt-1">300x250</div>
          </div>
        </div>
      </motion.div>

      {/* Ad Slot 2 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-lg border border-border bg-card p-4 overflow-hidden"
      >
        <div className="mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Advertisement</div>
        <div className="aspect-video bg-linear-to-br from-primary/10 to-primary/5 rounded-md flex items-center justify-center border border-border/50">
          <div className="text-center">
            <div className="text-sm font-medium text-muted-foreground">Google Ad Space</div>
            <div className="text-xs text-muted-foreground/70 mt-1">300x250</div>
          </div>
        </div>
      </motion.div>

      {/* Ad Slot 3 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-lg border border-border bg-card p-4 overflow-hidden"
      >
        <div className="mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Advertisement</div>
        <div className="aspect-video bg-linear-to-br from-primary/10 to-primary/5 rounded-md flex items-center justify-center border border-border/50">
          <div className="text-center">
            <div className="text-sm font-medium text-muted-foreground">Google Ad Space</div>
            <div className="text-xs text-muted-foreground/70 mt-1">300x250</div>
          </div>
        </div>
      </motion.div>
    </aside>
  )
}
