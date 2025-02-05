<template>
  <div>
    <v-app-bar color="primary" scroll-behavior="elevate">
      <v-container>
        <v-row dense>
          <v-app-bar-nav-icon
            class="hidden-md-and-up mr-1"
          ></v-app-bar-nav-icon>

          <v-app-bar-title class="my-auto font-weight-black">
            Mitranet
          </v-app-bar-title>

          <v-spacer></v-spacer>

          <div class="my-auto hidden-md-and-down">
            <v-btn>Home</v-btn>
            <v-btn>About</v-btn>
            <v-btn>Product</v-btn>
            <v-btn>Contact</v-btn>
          </div>
        </v-row>
      </v-container>
    </v-app-bar>

    <div class="pb-10" style="margin-top: 60px; background-color: #3674b5">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" class="my-auto">
            <div class="text-white">
              <span style="font-size: 6vh; font-weight: bold">
                Solve Your Problem With Style
              </span>
            </div>

            <div>
              <span style="color: #a1e3f9">
                Kami selalu berdedikasi tinggi untuk menyelesaikan masalah
              </span>
            </div>
          </v-col>

          <v-col class="px-5" cols="12" md="6">
            <v-img
              class="animated"
              src="~/assets/gambar/baner/baner1.png"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div>
      <home-introduction />
    </div>

    <div style="background-color: #f8fafc">
      <home-misi />
    </div>

    <div>
      <home-product />
    </div>

    <div style="background-color: #f8fafc">
      <home-team />
    </div>

    <div>
      <home-kontak />
    </div>
  </div>
</template>

<style>
body {
  font-family: Poppins;
}

.animated {
  animation: up-down 2s ease-in-out infinite alternate-reverse both;
}

@keyframes up-down {
  0% {
    transform: translateY(10px);
  }

  100% {
    transform: translateY(-10px);
  }
}
</style>
