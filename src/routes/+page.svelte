<script lang="ts">
  import {formatDistanceToNow, formatRelative, subHours} from 'date-fns'

  const now = new Date()

  let settingsModal: any
  let defaultTheme = 'retro'

  const leaders = [
    {
      name: 'Bilbo Baggins',
      isOnline: true,
    },
    {
      name: 'Frodo Baggins',
      isOnline: false,
    },
    {
      name: 'Samwise Gamgee',
      isOnline: true,
    },
    {
      name: 'Peregrin Took',
      isOnline: false,
    },
    {
      name: 'Meriadoc Brandybuck',
      isOnline: true,
    },
    {
      name: 'Aragorn Elessar',
      isOnline: false,
    },
  ]

  const chats = [
    {
      id: '1',
      name: 'Bilbo Baggins',
      lastMessageCreatedAt: now,
      isUnread: true,
    },
    {
      id: '2',
      name: 'Frodo Baggins',
      lastMessageCreatedAt: subHours(now, 2),
      isUnread: false,
    },
    {
      id: '3',
      name: 'Samwise Gamgee',
      lastMessageCreatedAt: subHours(now, 4),
      isUnread: false,
    },
    {
      id: '4',
      name: 'Peregrin Took',
      lastMessageCreatedAt: subHours(now, 5),
      isUnread: false,
    },
    {
      id: '5',
      name: 'Meriadoc Brandybuck',
      lastMessageCreatedAt: subHours(now, 6),
      isUnread: false,
    },
    {
      id: '6',
      name: 'Aragorn Elessar',
      lastMessageCreatedAt: subHours(now, 32),
      isUnread: false,
    },
  ]

  let activeChat = {
    id: '3',
    name: 'Samwise Gamgee',
    messages: [
      {
        text: 'Hey, Sam!',
        createdAt: subHours(now, 4),
        isMine: true,
      },
      {
        text: 'Hey, Frodo!',
        createdAt: subHours(now, 3),
        isMine: false,
      },
      {
        text: `What's up?`,
        createdAt: subHours(now, 2),
        isMine: true,
      },
      {
        text: `All good in Shire?`,
        createdAt: subHours(now, 2),
        isMine: true,
      },
      {
        text: `Yup, not too bad`,
        createdAt: subHours(now, 2),
        isMine: false,
      },
    ],
  }
</script>

<div class="flex h-screen">
  <aside class="flex h-full flex-col gap-4 bg-base-300 p-4">
    <button class="btn btn-primary w-full">
      <h1>Svelte Chat</h1>
    </button>

    <ul class="menu w-56 rounded-box bg-base-200">
      <li class="menu-title">Available Leaders</li>
      {#each leaders as leader}
        <li>
          <a href="#TODO">
            {leader.name}
            {#if leader.isOnline}
              <span class="badge badge-primary badge-xs" />
            {/if}
          </a>
        </li>
      {/each}
    </ul>

    <ul class="menu w-56 rounded-box bg-base-200">
      <li class="menu-title">Conversations</li>
      {#each chats as chat}
        <li>
          <a href="#TODO" class:active={chat.id === activeChat.id}>
            {chat.name}
            {#if chat.isUnread}
              <span class="badge badge-primary badge-sm">Unread</span>
            {/if}
          </a>
        </li>
      {/each}
    </ul>

    <div class="grow" />

    <ul class="menu w-56 rounded-box bg-base-200">
      <li>
        <button on:click={() => settingsModal.showModal()}>Settings</button>
        <button>Logout</button>
      </li>
    </ul>
  </aside>

  <div class="flex grow flex-col">
    <header class="navbar bg-base-200 p-4">
      <div class="flex-1">
        <button class="btn btn-ghost text-xl">{activeChat.name}</button>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <button tabindex="0" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-5 w-5 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>
          <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
          <ul
            tabindex="0"
            class="menu dropdown-content z-[1] mt-4 w-40 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                Edit
              </button>
            </li>
            <li>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>
                Archive
              </button>
            </li>
            <li>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                  />
                </svg>
                Delete
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <main class="grow p-4">
      {#each activeChat.messages as { isMine, createdAt, text }}
        <div class="chat" class:chat-start={!isMine} class:chat-end={isMine}>
          <div class="chat-header">
            {isMine ? 'You' : activeChat.name}
            <time class="text-xs opacity-50">
              {formatDistanceToNow(createdAt, {addSuffix: true})}
            </time>
          </div>
          <div class="chat-bubble" class:chat-bubble-primary={isMine}>
            {text}
          </div>
        </div>
      {/each}
    </main>
    <footer class="flex gap-4 bg-base-200 p-4">
      <input
        type="text"
        placeholder="Type here"
        class="input input-bordered grow"
      />
      <button class="btn btn-primary">Send</button>
    </footer>
  </div>
</div>

<dialog id="settingsModal" class="modal" bind:this={settingsModal}>
  <div class="modal-box prose">
    <h3 class="">Settings</h3>

    <h4 class="">Theme</h4>

    {#each ['cupcake', 'retro', 'dim', 'sunset'] as theme}
      <div class="form-control">
        <label class="label cursor-pointer gap-4">
          <span class="label-text capitalize">
            {theme}
          </span>
          <input
            type="radio"
            name="theme-radios"
            class="theme-controller radio"
            value={theme}
            bind:group={defaultTheme}
          />
        </label>
      </div>
    {/each}
  </div>

  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
