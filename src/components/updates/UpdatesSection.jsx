import { UpdateCard } from "@/components/updates/UpdateCard";
import { loadPersonalUpdates } from "@/utils/utils";

export default function UpdatesSection() {
  const updates = loadPersonalUpdates();

  return (
    <div className="w-full">
      {updates.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No updates available yet.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {updates.map((update, index) => (
            <UpdateCard
              key={index}
              title={update.title}
              content={update.content}
              date={update.date}
              tags={update.tags}
              images={update.images}
            />
          ))}
        </div>
      )}
    </div>
  );
}

