import Link from 'next/link';

export default function () {
  return (
    <div className="h-screen w-1/5 bg-indigo-300">
      <div className="flex flex-col">
        <button>
          <Link href='/dashboard/editor/upload'>
            Upload
          </Link>
        </button>
        <button>
          <Link href='/dashboard/editor/videos'>
            Videos
          </Link>
        </button>
        <button>
          <Link href='/'>
            link
          </Link>
        </button>
      </div>
    </div>
  );
}