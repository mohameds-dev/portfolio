"use client";

import { UpdateCard } from "@/components/updates/UpdateCard";
import { loadPersonalUpdates } from "@/utils/utils";
import { useUpdatesModal } from "@/components/UpdatesModalProvider";

export default function LatestUpdate() {
  const updates = loadPersonalUpdates();
  const latestUpdate = updates.length > 0 ? updates[0] : null;
  const { openModal } = useUpdatesModal();

  if (!latestUpdate) {
    return null;
  }

  return (
    <section id="updates" className="py-12 px-4 md:px-8 scroll-mt-16">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Latest Update
          </h2>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              openModal();
            }}
            className="text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 font-medium transition-colors duration-200 cursor-pointer"
            type="button"
          >
            Show all updates
          </button>
        </div>

        <UpdateCard
          title={latestUpdate.title}
          content={latestUpdate.content}
          date={latestUpdate.date}
          tags={latestUpdate.tags}
          images={latestUpdate.images}
        />
      </div>
    </section>
  );
}

