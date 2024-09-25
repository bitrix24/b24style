<script setup lang="ts">
</script>
<template>
	<h1 class="text-h1 mb-sm flex whitespace-pre-wrap">Basic Elements</h1>
	<div class="lg:col-span-5 xl:col-span-6 flex flex-col">
		<div class="bg-tertiary overflow-hidden p-lg2">
			<div class="flex flex-col md:flex-row">
				<div class="flex-auto flex min-w-0">
					<div class="w-full flex-none">
						<ul class="space-y-xl">
							<li class="grid">
								<div class="font-mono text-xs leading-5 pb-2xs border-b border-base-200 text-base-600">
									font-b24-primary | font-b24-secondary <span class="text-nowrap text-base-500">& font-b24-b24-system</span>
								</div>
								<div class="col-start-2 text-right font-mono text-xs leading-5 text-base-400 pb-2xs border-b border-base-200">
									text-5xl
								</div>
								<div class="mt-md col-span-2 text-h1 font-b24-primary">
									AaBbCc
									<br>+-*%...0123456789
								</div>
							</li>
							<li class="grid">
								<div class="font-mono text-xs leading-5 pb-2xs border-b border-base-200 text-base-600">
									typography
								</div>
								<div class="col-start-2 text-right font-mono text-xs leading-5 text-base-400 pb-2xs border-b border-base-200">
									text-md
								</div>
								<div class="font-b24-primary mt-4 col-span-2 text-md">
									<p class="mb-3">+-*%...0123456789</p>
									<p class="mb-1">An nam debet instructior, commodo mediocrem id cum. Mandamus
										abhorreant deseruisse mea at, mea elit deserunt persequeris at, in putant
										fuisset honestatis qui. Solum vituperata definitiones te vis, vis alia falli
										doming ea. Sale liber et vel. Oratio accumsan et mea. Elitr accommodare
										deterruisset eam te, vim munere pertinax consetetur at.</p>
									<p class="mb-3 line-clamp-3">Solum vituperata definitiones te vis, vis alia falli doming ea.
										Postulant assueverit ea his. Vix paulo sanctus scripserit ex, te iriure
										insolens voluptatum qui. Lorem ipsum dolor sit amet, an eos lorem ancillae
										expetenda, vim et utamur quaestio. Nisl omittam complectitur pro an, quem
										omnes munere id vix.</p>
								</div>
							</li>
							<li class="grid">
								<div class="font-mono text-xs leading-5 pb-2xs border-b border-base-200 text-base-600">
									Base
								</div>
								<div class="col-start-2 text-right font-mono text-xs leading-5 text-base-400 pb-2xs border-b border-base-200">
									palette
								</div>
								<div class="font-b24-primary mt-4 col-span-2 text-md">
									<div class="rounded-md bg-white overflow-hidden p-lg">
										<div class="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-x-2 gap-y-8 sm:grid-cols-1">
											<div class="2xl:contents">
												<div class="grid mt-3 grid-cols-2 sm:grid-cols-6 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-base-20 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">20</div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#F8FAFB
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-base-30 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">30</div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#F5F7F8
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-base-40 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">40</div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#F1F4F6
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-base-50 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">50</div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#EEF2F4
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-base-100 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">100</div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#EDEEF0
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-base-150 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">150</div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#E6E7E9
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-base-200 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">200</div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#DFE0E3
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-base-300 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">300</div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#D5D7DB
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class=" flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-base-350 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">350</div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#C9CCD0
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-base-400 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">400</div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#BDC1C6
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-base-500 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">500</div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#A8ADB4
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-base-600 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">600</div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#959CA4
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-base-700 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">700</div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#828B95
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-base-800 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">800</div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#6A737F
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-base-900 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">900</div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#525C69
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="relative flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-base-master h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="absolute -top-2 -left-1 bg-accent-light-blue text-white px-2xs py-3xs text-5xs rounded-lg">master</div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">master</div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#333333
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-base-solid h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">solid</div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#000000
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="grid">
								<div class="font-mono text-xs leading-5 pb-2xs border-b border-base-200 text-base-600">
									Primary
								</div>
								<div class="col-start-2 text-right font-mono text-xs leading-5 text-base-400 pb-2xs border-b border-base-200">
									palette
								</div>
								<div class="font-b24-primary mt-4 col-span-2 text-md">
									<div class="rounded-md bg-white overflow-hidden p-lg">
										<div class="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-x-2 gap-y-8 sm:grid-cols-1">
											<div class="2xl:contents">
												<div class="grid mt-3 grid-cols-2 sm:grid-cols-6 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
													<div class="relative flex">
														<div class="relative flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-primary h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="absolute -top-2 -left-1 bg-accent-light-blue text-white px-2xs py-3xs text-5xs rounded-lg">default</div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">&nbsp; <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&blue.500</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#2FC6F6
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-primary-on border border-base-40 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">on <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&white</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#FFFFFF
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-primary-text h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">text <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&black.DEFAULT</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#333333
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-primary-background border border-base-40 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">background <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&white</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#FFFFFF
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-primary-background-on h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white"><span class="text-nowrap">background-on</span> <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&black.DEFAULT</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#333333
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-primary-link h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">link</div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#2066B0
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="grid">
								<div class="font-mono text-xs leading-5 pb-2xs border-b border-base-200 text-base-600">
									Secondary
								</div>
								<div class="col-start-2 text-right font-mono text-xs leading-5 text-base-400 pb-2xs border-b border-base-200">
									palette
								</div>
								<div class="font-b24-primary mt-4 col-span-2 text-md">
									<div class="rounded-md bg-white overflow-hidden p-lg">
										<div class="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-x-2 gap-y-8 sm:grid-cols-1">
											<div class="2xl:contents">
												<div class="grid mt-3 grid-cols-2 sm:grid-cols-6 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
													<div class="relative flex">
														<div class="relative flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-secondary h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="absolute -top-2 -left-1 bg-accent-light-blue text-white px-2xs py-3xs text-5xs rounded-lg">default</div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">&nbsp; <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&gray.500</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#A8ADB4
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-secondary-on border border-base-40 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">on <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&white</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#FFFFFF
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-secondary-text h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">text <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&gray.900</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#525C69
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-secondary-background h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">background <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&gray.100</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#EDEEF0
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-secondary-background-on h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white"><span class="text-nowrap">background-on</span> <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&gray.800</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#6A737F
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-secondary-link h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">link  <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&blue.950</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#004f69
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="grid">
								<div class="font-mono text-xs leading-5 pb-2xs border-b border-base-200 text-base-600">
									Alert
								</div>
								<div class="col-start-2 text-right font-mono text-xs leading-5 text-base-400 pb-2xs border-b border-base-200">
									palette
								</div>
								<div class="font-b24-primary mt-4 col-span-2 text-md">
									<div class="rounded-md bg-white overflow-hidden p-lg">
										<div class="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-x-2 gap-y-8 sm:grid-cols-1">
											<div class="2xl:contents">
												<div class="grid mt-3 grid-cols-2 sm:grid-cols-6 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
													<div class="relative flex">
														<div class="relative flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-alert h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="absolute -top-2 -left-1 bg-accent-light-blue text-white px-2xs py-3xs text-5xs rounded-lg">default</div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">&nbsp; <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&red.500</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#FF5752
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-alert-on border border-base-40 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">on <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&white</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#FFFFFF
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-alert-text h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">text <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&red.500</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#FF5752
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-alert-background h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">background <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&red.200</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#FFE8E8
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-alert-background-on h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white"><span class="text-nowrap">background-on</span> <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&red.700</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#E92F2A
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-alert-link h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">link  <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&red.900</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#9A0703
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="grid">
								<div class="font-mono text-xs leading-5 pb-2xs border-b border-base-200 text-base-600">
									Success
								</div>
								<div class="col-start-2 text-right font-mono text-xs leading-5 text-base-400 pb-2xs border-b border-base-200">
									palette
								</div>
								<div class="font-b24-primary mt-4 col-span-2 text-md">
									<div class="rounded-md bg-white overflow-hidden p-lg">
										<div class="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-x-2 gap-y-8 sm:grid-cols-1">
											<div class="2xl:contents">
												<div class="grid mt-3 grid-cols-2 sm:grid-cols-6 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
													<div class="relative flex">
														<div class="relative flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-success h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="absolute -top-2 -left-1 bg-accent-light-blue text-white px-2xs py-3xs text-5xs rounded-lg">default</div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">&nbsp; <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&green.500</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#9DCF00
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-success-on border border-base-40 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">on <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&white</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#FFFFFF
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-success-text h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">text <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&green.500</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#9DCF00
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-success-background h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">background <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&green.200</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#F1FBD0
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-success-background-on h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white"><span class="text-nowrap">background-on</span> <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&green.700</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#7FA800
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-success-link h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">link  <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&green.900</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#506900
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="grid">
								<div class="font-mono text-xs leading-5 pb-2xs border-b border-base-200 text-base-600">
									Warning
								</div>
								<div class="col-start-2 text-right font-mono text-xs leading-5 text-base-400 pb-2xs border-b border-base-200">
									palette
								</div>
								<div class="font-b24-primary mt-4 col-span-2 text-md">
									<div class="rounded-md bg-white overflow-hidden p-lg">
										<div class="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-x-2 gap-y-8 sm:grid-cols-1">
											<div class="2xl:contents">
												<div class="grid mt-3 grid-cols-2 sm:grid-cols-6 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
													<div class="relative flex">
														<div class="relative flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-warning h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="absolute -top-2 -left-1 bg-accent-light-blue text-white px-2xs py-3xs text-5xs rounded-lg">default</div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">&nbsp; <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&orange.500</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#FFA900
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-warning-on border border-base-40 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">on <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&white</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#FFFFFF
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-warning-text h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">text <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&orange.500</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#FFA900
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-warning-background h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">background <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&orange.200</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#FFF1D6
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-warning-background-on h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white"><span class="text-nowrap">background-on</span> <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&orange.700</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#C48300
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-warning-link h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">link  <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&orange.900</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#7A5100
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li class="grid">
								<div class="font-mono text-xs leading-5 pb-2xs border-b border-base-200 text-base-600">
									Info
								</div>
								<div class="col-start-2 text-right font-mono text-xs leading-5 text-base-400 pb-2xs border-b border-base-200">
									palette
								</div>
								<div class="font-b24-primary mt-4 col-span-2 text-md">
									<div class="rounded-md bg-white overflow-hidden p-lg">
										<div class="grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-x-2 gap-y-8 sm:grid-cols-1">
											<div class="2xl:contents">
												<div class="grid mt-3 grid-cols-2 sm:grid-cols-6 gap-y-3 gap-x-2 sm:mt-2 2xl:mt-0">
													<div class="relative flex">
														<div class="relative flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-info h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="absolute -top-2 -left-1 bg-accent-light-blue text-white px-2xs py-3xs text-5xs rounded-lg">default</div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">&nbsp; <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&blue.500</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#2FC6F6
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-info-on border border-base-40 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">on <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&white</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#FFFFFF
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-info-text h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">text <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&blue.500</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#2FC6F6
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-info-background h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">background <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&blue.200</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#E5F9FF
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-info-background-on h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white"><span class="text-nowrap">background-on</span> <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&blue.700</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#008DBA
																</div>
															</div>
														</div>
													</div>
													<div class="relative flex">
														<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
															<div class="bg-info-link h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
															<div class="px-0.5">
																<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">link  <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&blue.900</span></div>
																<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
																	#006484
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="w-full md:w-1/6 flex-none mt-8 ml-0 md:mt-6 md:ml-10">
					<ul class="space-y-6">
						<li>
							<div class="grid bg-white text-base-600 rounded-md p-3">
								<div class="font-mono text-xs">Symlink</div>
								<div class="col-start-2 font-mono text-xs text-right"></div>
								<div class="mt-2xs col-span-2 grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-x-2 gap-y-8 sm:grid-cols-1">
									<div class="2xl:contents">
										<div class="grid mt-3 grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-y-4 gap-x-2 sm:mt-2 2xl:mt-0">
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-note h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">note <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&beige</span></div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#FDFAE1
														</div>
													</div>
												</div>
											</div>
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-subtle h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">subtle <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&gray.700</span></div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#828B95
														</div>
													</div>
												</div>
											</div>
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-extranet h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">extranet <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&orange.600</span></div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#E89B06
														</div>
													</div>
												</div>
											</div>
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-tertiary h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">tertiary <span class="text-nowrap text-xs font-mono text-base-500 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">&gray.50</span></div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#EEF2F4
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="grid bg-white text-base-600 rounded-md p-3">
								<div class="font-mono text-xs">Accent</div>
								<div class="col-start-2 font-mono text-xs text-right"></div>
								<div class="mt-2xs col-span-2 grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-x-2 gap-y-8 sm:grid-cols-1">
									<div class="2xl:contents">
										<div class="grid mt-3 grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-y-4 gap-x-2 sm:mt-2 2xl:mt-0">
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-accent-aqua h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">aqua</div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#55D0E0
														</div>
													</div>
												</div>
											</div>
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-accent-light-blue h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white"><div class="text-nowrap">light-blue</div></div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#559BE6
														</div>
													</div>
												</div>
											</div>
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-accent-pink h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">pink</div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#FB6DBA
														</div>
													</div>
												</div>
											</div>
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-accent-brown h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">brown</div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#AE914B
														</div>
													</div>
												</div>
											</div>
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-accent-green h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">green</div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#29AD49
														</div>
													</div>
												</div>
											</div>
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-accent-turquoise h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">turquoise</div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#05B5AB
														</div>
													</div>
												</div>
											</div>
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-accent-purple h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">purple</div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#A77BDE
														</div>
													</div>
												</div>
											</div>
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-accent-lavender h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">lavender</div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#8E52EC
														</div>
													</div>
												</div>
											</div>
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-accent-yellow h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white">yellow</div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#FEF3B8
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="grid bg-white text-base-600 rounded-md p-3">
								<div class="font-mono text-xs">Tag</div>
								<div class="col-start-2 font-mono text-xs text-right"></div>
								<div class="mt-2xs col-span-2 grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-x-2 gap-y-8 sm:grid-cols-1">
									<div class="2xl:contents">
										<div class="grid mt-3 grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-y-4 gap-x-2 sm:mt-2 2xl:mt-0">
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-tag-1 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white"><div class="text-nowrap">tag-1</div></div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#BCEDFC
														</div>
													</div>
												</div>
											</div>
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-tag-2 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white"><div class="text-nowrap">tag-2</div></div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#00BAF2
														</div>
													</div>
												</div>
											</div>
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-tag-3 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white"><div class="text-nowrap">tag-3</div></div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#DBF087
														</div>
													</div>
												</div>
											</div>
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-tag-4 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white"><div class="text-nowrap">tag-4</div></div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#87EDA0
														</div>
													</div>
												</div>
											</div>
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-tag-5 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white"><div class="text-nowrap">tag-5</div></div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#C2D1F0
														</div>
													</div>
												</div>
											</div>
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-tag-6 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white"><div class="text-nowrap">tag-6</div></div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#ACE5EC
														</div>
													</div>
												</div>
											</div>
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-tag-7 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white"><div class="text-nowrap">tag-7</div></div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#DFC684
														</div>
													</div>
												</div>
											</div>
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-tag-8 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white"><div class="text-nowrap">tag-8</div></div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#CCD3DD
														</div>
													</div>
												</div>
											</div>
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-tag-9 h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white"><div class="text-nowrap">tag-9</div></div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#E2E3E5
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div class="grid bg-white text-base-600 rounded-md p-3">
								<div class="font-mono text-xs">Copilot</div>
								<div class="col-start-2 font-mono text-xs text-right"></div>
								<div class="mt-2xs col-span-2 grid grid-cols-[repeat(auto-fit,minmax(8rem,1fr))] gap-x-2 gap-y-8 sm:grid-cols-1">
									<div class="2xl:contents">
										<div class="grid mt-3 grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-y-4 gap-x-2 sm:mt-2 2xl:mt-0">
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-copilot-primary h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white"><div class="text-nowrap">copilot-primary</div></div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#8E52EC
														</div>
													</div>
												</div>
											</div>
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-copilot-secondary h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white"><div class="text-nowrap">copilot-secondary</div></div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#B095DC
														</div>
													</div>
												</div>
											</div>
											<div class="relative flex">
												<div class="flex items-center gap-x-3 w-full sm:block sm:space-y-1">
													<div class="bg-copilot-dark h-10 w-10 rounded dark:ring-1 dark:ring-inset dark:ring-white/10 sm:w-full"></div>
													<div class="px-0.5">
														<div class="w-6 font-medium text-xs text-base-master 2xl:w-full dark:text-white"><div class="text-nowrap">copilot-dark</div></div>
														<div class="text-base-500 text-xs font-mono lowercase dark:text-base-400 sm:text-[0.625rem] md:text-xs lg:text-[0.625rem] 2xl:text-xs">
															#682AC6
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>