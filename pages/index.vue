<template>
  <div class="flex h-screen overflow-hidden">
    <div class="bg-dark-3 flex flex-col" style="flex-basis: 232px;">
      <div class="flex items-center my-6">
        <!-- prettier-ignore -->
        <svg class="fill-current text-white ml-6 cursor-pointer" style="width: 8.5rem;" viewBox="0 0 1134 340">
          <title>Spotify</title>
          <path
            fill="currentColor"
            d="M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z"
          />
        </svg>
      </div>
      <div class="px-2 mb-6 text-gray-1 text-sm font-bold">
        <div
          v-for="tab in tabs"
          :key="tab"
          @mouseover="hoverTab = tab"
          @mouseleave="hoverTab = ''"
          @click="activeTab = tab"
          class="flex items-center rounded-md py-2 px-4 capitalize cursor-pointer"
          :class="{ 'bg-dark-1 text-white': activeTab === tab, 'text-white': hoverTab === tab }"
        >
          <!-- prittier-ignore -->
          <svg class="fill-current w-6 mr-4" viewBox="0 0 512 512">
            <path d="M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z" fill="currentColor" />
          </svg>
          <p class>{{ tab }}</p>
        </div>
      </div>
      <div class="flex flex-col text-gray-1 font-bold text-sm">
        <p class="uppercase mx-6 mb-3 tracking-widest">Playlists</p>
        <div
          v-for="playlist in playlists"
          :key="playlist"
          @mouseover="hoverPlaylist = playlist"
          @mouseleave="hoverPlaylist = ''"
          class="flex items-center rounded-md py-2 mx-6 capitalize cursor-pointer"
          :class="{ 'text-white': hoverPlaylist === playlist }"
        >
          <div class="flex justify-center items-center bg-gray-1 w-8 h-8 mr-4">
            <!-- prittier-ignore -->
            <svg class="fill-current text-black w-3" viewBox="0 0 448 448">
              <path d="m272 184c-4.417969 0-8-3.582031-8-8v-176h-80v176c0 4.417969-3.582031 8-8 8h-176v80h176c4.417969 0 8 3.582031 8 8v176h80v-176c0-4.417969 3.582031-8 8-8h176v-80zm0 0" />
            </svg>
          </div>
          <p class>{{ playlist }}</p>
        </div>
      </div>
    </div>
    <div class="flex flex-col bg-dark-2 flex-grow">
      <div class="flex justify-between items-center px-8 text-white" style="flex-basis: 60px;">
        <div class="flex">
          <div class="flex justify-center items-center rounded-full w-8 h-8 bg-dark-3 mr-4 cursor-pointer hover:text-gray-1">
            <!-- prettier-ignore -->
            <svg class="fill-current w-4 transform rotate-90" x="0px" y="0px" viewBox="0 0 490.656 490.656"><g><g><path d="M487.536,120.445c-4.16-4.16-10.923-4.16-15.083,0L245.317,347.581L18.203,120.445c-4.16-4.16-10.923-4.16-15.083,0 c-4.16,4.16-4.16,10.923,0,15.083l234.667,234.667c2.069,2.091,4.8,3.136,7.531,3.136s5.461-1.045,7.552-3.115l234.667-234.667 C491.696,131.368,491.696,124.627,487.536,120.445z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
          </div>
          <div class="flex justify-center items-center rounded-full w-8 h-8 bg-dark-3 cursor-pointer hover:text-gray-1">
            <!-- prettier-ignore -->
            <svg class="fill-current w-4 transform -rotate-90" x="0px" y="0px" viewBox="0 0 490.656 490.656"><g><g><path d="M487.536,120.445c-4.16-4.16-10.923-4.16-15.083,0L245.317,347.581L18.203,120.445c-4.16-4.16-10.923-4.16-15.083,0 c-4.16,4.16-4.16,10.923,0,15.083l234.667,234.667c2.069,2.091,4.8,3.136,7.531,3.136s5.461-1.045,7.552-3.115l234.667-234.667 C491.696,131.368,491.696,124.627,487.536,120.445z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
          </div>
        </div>
        <div class="flex">
          <div class="uppercase text-xs font-bold rounded-full py-2 px-8 border border-gray-1 hover:border-white cursor-pointer transform hover:scale-105" style="letter-spacing: 1.76px;">upgrade</div>
          <div @click="dashboardOpen = !dashboardOpen" class="flex items-center ml-4 rounded-full cursor-pointer hover:bg-dark-1">
            <img class="rounded-full" style="width: 28px;" src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10155803283422286&height=300&width=300&ext=1600197382&hash=AeQfPOUCOWoX8gYa" />
            <p class="text-sm text-white font-bold ml-2">Nitzan Lev</p>
            <!-- prettier-ignore -->
            <svg class="fill-current text-white w-3 mx-2" :class="{'transform rotate-180' : dashboardOpen}" x="0px" y="0px" viewBox="0 0 292.362 292.362"><g><path d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424 C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428 s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
          </div>
        </div>
      </div>
      <div class="flex-1 overflow-y-auto px-8"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ["home", "search", "your library"],
      activeTab: "home",
      hoverTab: "",
      playlists: ["create playlist", "liked songs"],
      hoverPlaylist: "",
      dashboardOpen: false
    };
  }
};
</script>

<style scoped></style>
