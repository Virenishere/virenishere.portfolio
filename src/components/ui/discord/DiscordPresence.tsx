/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import Image from 'next/image';

interface DiscordPresenceProp {
  userId: string;
  username: string;
  progressBarClass?: string;
  activityClass?: string;
  detailsClass?: string;
  timeClass?: string;
  stateClass?: string;
  userClass?: string;
  containerClass?: string;
  imageContainerClass?: string;
  detailContainerClass?: string;
}

type DiscordStatus = 'online' | 'idle' | 'dnd' | 'offline';

const STATUS_LABEL: Record<DiscordStatus, string> = {
  online: 'Online',
  idle: 'Idle',
  dnd: 'Do Not Disturb',
  offline: 'Offline',
};

const STATUS_COLOR: Record<DiscordStatus, string> = {
  online: '#22c55e',
  idle: '#eab308',
  dnd: '#ef4444',
  offline: '#6b7280',
};

const DEFAULT_AVATARS = [
  'https://cdn.discordapp.com/embed/avatars/0.png',
  'https://cdn.discordapp.com/embed/avatars/1.png',
  'https://cdn.discordapp.com/embed/avatars/2.png',
  'https://cdn.discordapp.com/embed/avatars/3.png',
  'https://cdn.discordapp.com/embed/avatars/4.png',
];

function buildAvatarUrl(
  uid?: string,
  hash?: string | null,
  discriminator?: string
): string {
  if (uid && hash) {
    const ext = hash.startsWith('a_') ? 'gif' : 'png';
    return `https://cdn.discordapp.com/avatars/${uid}/${hash}.${ext}?size=512`;
  }
  const idx = Number(discriminator ?? 0) % 5;
  return DEFAULT_AVATARS[Number.isFinite(idx) ? idx : 0];
}

const DiscordPresence: React.FC<DiscordPresenceProp> = ({
  userId,
  username,
  progressBarClass,
  activityClass,
  userClass,
  stateClass,
  detailsClass,
  timeClass,
  containerClass,
  imageContainerClass,
  detailContainerClass,
}) => {
  const hasUserId = Boolean(userId);
  const [name, setName] = useState(username);
  const [state, setState] = useState('');
  const [details, setDetails] = useState(
    hasUserId ? 'Connecting…' : STATUS_LABEL.offline
  );
  const [discordStatus, setDiscordStatus] = useState<DiscordStatus>('offline');
  const [elapsed, setElapsed] = useState('');
  const [isSpotify, setIsSpotify] = useState(false);
  const [progress, setProgress] = useState(0);
  const [largeImage, setLargeImage] = useState('');
  const [smallImage, setSmallImage] = useState('');
  const [time, setTime] = useState('12:00:00 AM');
  const [songLink, setSongLink] = useState('');

  const {
    isListeningToSpotify,
    isActivity,
    activity,
    discordUser,
    isNoActivity,
    timedOut,
  } = useDiscord(userId);

  const localtime = () => {
    setTime(
      new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })
    );
  };

  function elapsedTime(timestampStart: number) {
    const elapsedMs = new Date().getTime() - timestampStart;
    const elapsedTimeString = new Date(elapsedMs).toISOString().slice(14, 19);
    setElapsed(elapsedTimeString);
  }

  function musicProgress(spotify: any) {
    const spotifyTotal = spotify?.timestamps?.end - spotify?.timestamps?.start;
    const prog =
      100 -
      (100 * (spotify?.timestamps?.end - new Date().getTime())) / spotifyTotal;
    setProgress(prog);
  }

  useEffect(() => {
    const status = (discordUser?.discord_status as DiscordStatus) ?? 'offline';
    setDiscordStatus(status);

    const avatarUrl = buildAvatarUrl(
      discordUser?.discord_user?.id ?? userId,
      discordUser?.discord_user?.avatar,
      discordUser?.discord_user?.discriminator
    );

    if (isListeningToSpotify) {
      const { track_id, artist, song, album_art_url } = activity || {};
      const artistDetails = (artist ?? '').replace(/;/g, ', ');
      setSongLink(`https://open.spotify.com/track/${track_id}`);
      setName(song ?? '');
      setDetails(artistDetails);
      setLargeImage(album_art_url ?? avatarUrl);
      musicProgress(activity);
      setIsSpotify(true);
      return;
    }

    if (isActivity) {
      const { name, details, assets, timestamps, state, application_id } =
        activity || {};
      const buildAssetUrl = (key?: string) => {
        if (!key) return '';
        if (key.includes('http')) {
          return 'https://' + key.replace(/^mp:external\/[^/]+\/https\//, '');
        }
        if (!application_id) return '';
        return `https://cdn.discordapp.com/app-assets/${application_id}/${key}.webp?size=512`;
      };
      setName(name ?? '');
      setDetails(details ?? STATUS_LABEL[status]);
      setState(state ?? '');
      setLargeImage(buildAssetUrl(assets?.large_image) || avatarUrl);
      setSmallImage(buildAssetUrl(assets?.small_image));
      if (timestamps?.start) elapsedTime(timestamps.start);
      else setElapsed('');
      setIsSpotify(false);
      return;
    }

    if (isNoActivity) {
      setDetails(STATUS_LABEL[status]);
      setLargeImage(avatarUrl);
      setName(discordUser?.discord_user?.username ?? username);
      setSmallImage('');
      setIsSpotify(false);
      return;
    }

    if (timedOut && !discordUser?.discord_user) {
      setDetails(STATUS_LABEL.offline);
      setName(username);
      setLargeImage('');
      setSmallImage('');
      setIsSpotify(false);
    }
  }, [
    isListeningToSpotify,
    activity,
    discordUser,
    isNoActivity,
    isActivity,
    timedOut,
    userId,
    username,
  ]);

  useEffect(() => {
    localtime();
    const intervalId = setInterval(localtime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={cn(
        'bg-black/90 px-4 py-6 rounded-2xl text-white flex justify-start items-center gap-6 min-w-[320px]',
        containerClass
      )}
    >
      <div
        className={cn(
          'relative mt-1 min-w-[100px] h-[100px]',
          imageContainerClass
        )}
      >
        {largeImage === '' ? (
          <div className="bg-gradient-to-br from-stone-700 to-stone-900 w-[100px] h-[100px] rounded-2xl flex items-center justify-center text-3xl font-grotesk text-gray-300 select-none">
            {(username?.[0] || 'V').toUpperCase()}
          </div>
        ) : (
          <Image
            src={largeImage}
            fill
            sizes="100px"
            className={cn('rounded-2xl relative select-none object-cover', {
              'animate-[spin_40s_linear_infinite] rounded-full': isSpotify,
            })}
            alt="Discord avatar"
            unoptimized={largeImage.endsWith('.gif')}
          />
        )}

        <span
          aria-label={STATUS_LABEL[discordStatus]}
          title={STATUS_LABEL[discordStatus]}
          className="absolute bottom-[-4px] right-[-4px] w-4 h-4 rounded-full border-[3px] border-black"
          style={{ background: STATUS_COLOR[discordStatus] }}
        />

        {isActivity && smallImage && (
          <Image
            src={smallImage}
            height={40}
            width={40}
            className="rounded-full bottom-[-10px] right-3 select-none absolute p-2 bg-black/90"
            alt="Activity icon"
          />
        )}
      </div>
      <div
        className={cn(
          'flex flex-col justify-start items-start w-full',
          detailContainerClass
        )}
      >
        <h1
          className={cn(
            'font-grotesk text-lg text-[#ffbe6f] md:text-2xl cursor-pointer leading-tight',
            activityClass
          )}
        >
          {isSpotify ? (
            <a href={songLink} target="_blank" rel="noreferrer">
              {name}
            </a>
          ) : (
            name
          )}
        </h1>
        <h3
          className={cn(
            'md:text-xl text-md mb-2',
            isSpotify && 'mb-3',
            isNoActivity && 'mb-0',
            detailsClass
          )}
        >
          {isSpotify
            ? details.length > 20
              ? `by ${details.slice(0, 20)}...`
              : `by ${details}`
            : isActivity
              ? details?.length > 20
                ? `${details.slice(0, 30)}...`
                : details
              : details}
        </h3>
        {(isSpotify || isActivity) && (
          <div
            className={cn(
              'w-full mb-2',
              isSpotify && 'mb-2',
              isNoActivity && 'mb-0',
              stateClass
            )}
          >
            {isSpotify ? (
              <Progress
                value={progress}
                className="w-[100px] md:w-[200px] h-[3px]"
                progressBarClass={progressBarClass}
              />
            ) : isActivity ? (
              state
            ) : (
              ''
            )}
          </div>
        )}
        {isActivity && elapsed && (
          <span className="mb-2">Elapsed : {elapsed}</span>
        )}
        <div className="flex flex-nowrap gap-1 flex-row items-center">
          <p className={cn('text-sm md:text-xl', userClass)}>
            @{discordUser?.discord_user?.username || username}
          </p>
          <span className="text-sm md:text-xl hidden sm:inline-block">•</span>
          <p className={cn('text-sm md:text-xl', timeClass)}>{time}</p>
        </div>
      </div>
    </div>
  );
};

const useDiscord = (userId: string) => {
  const [discordUser, setDiscordUser] = useState<any>(null);
  const [isListeningToSpotify, setIsListeningToSpotify] = useState(false);
  const [isActivity, setIsActivity] = useState(false);
  const [isNoActivity, setNoActivity] = useState(false);
  const [activity, setActivity] = useState<any>({});
  const [timedOut, setTimedOut] = useState(false);
  const receivedRef = React.useRef(false);

  useEffect(() => {
    if (!userId) {
      setTimedOut(true);
      return;
    }

    receivedRef.current = false;
    let lanyard: WebSocket | null = null;
    let heartbeatInterval: ReturnType<typeof setInterval> | null = null;
    let cancelled = false;

    const timeoutId = setTimeout(() => {
      if (!cancelled && !receivedRef.current) {
        setTimedOut(true);
        // eslint-disable-next-line no-console
        console.warn(
          '[DiscordPresence] No data from Lanyard after 5s — make sure your Discord account is in https://discord.gg/lanyard and NEXT_PUBLIC_DISCORD_USER_ID is your snowflake ID.'
        );
      }
    }, 5000);

    function applyPayload(data: any) {
      if (!data) return;
      receivedRef.current = true;
      const realActivities = (data.activities ?? []).filter(
        (a: any) => a && a.type !== 4 && a.name !== 'Hang Status'
      );

      if (data.listening_to_spotify && data.spotify) {
        setActivity(data.spotify);
        setIsListeningToSpotify(true);
        setIsActivity(false);
        setNoActivity(false);
      } else if (realActivities.length > 0) {
        setActivity(realActivities[0]);
        setIsActivity(true);
        setIsListeningToSpotify(false);
        setNoActivity(false);
      } else {
        setActivity({});
        setIsActivity(false);
        setIsListeningToSpotify(false);
        setNoActivity(true);
      }
      setDiscordUser(data);
      setTimedOut(false);
    }

    function connect() {
      lanyard = new WebSocket('wss://api.lanyard.rest/socket');

      lanyard.onmessage = (event) => {
        const jsonData = JSON.parse(event.data);
        const opcode = jsonData.op;
        const data: any = jsonData.d;

        if (opcode === 1) {
          const pulse = data?.heartbeat_interval ?? 30000;
          lanyard?.send(
            JSON.stringify({ op: 2, d: { subscribe_to_id: userId } })
          );
          heartbeatInterval = setInterval(() => {
            lanyard?.send(JSON.stringify({ op: 3 }));
          }, pulse);
          return;
        }
        if (opcode === 0) {
          applyPayload(data);
        }
      };

      lanyard.onclose = () => {
        if (heartbeatInterval) clearInterval(heartbeatInterval);
        if (!cancelled) setTimeout(() => connect(), 2500);
      };
    }

    connect();

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
      if (heartbeatInterval) clearInterval(heartbeatInterval);
      if (lanyard) lanyard.close();
    };
  }, [userId]);

  return {
    isListeningToSpotify,
    isActivity,
    isNoActivity,
    activity,
    discordUser,
    timedOut,
  };
};

type ProgressProps = {
  progressBarClass?: string;
  value?: number;
  className?: string;
};

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, progressBarClass, value }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
        className
      )}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          'h-full w-full flex-1 bg-white transition-all',
          progressBarClass
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
);
Progress.displayName = 'Progress';

export { DiscordPresence };
