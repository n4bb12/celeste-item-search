import { Trait } from "celeste-api-types"

import { quests } from "./quests"

const cyprusLegendaries = [
  "ArrowOH_L001",
  "Bow1H_L001",
  "Staff2H_L002",
  "Sword1H_L001",
  "Shield1H_L001",
  "ArmorLgt_L001",
  "Spear2H_L002_SR",
  "ArmorMed_L002",
  "Gear_L001",
  "ArmorPlt_L001",
]

const allianceCouncilOfImhotep = [
  "ArmorBldg_LC01",
  "FishingNet1H_LC01",
  "Gear_Prst_LC01",
]

const allianceDelianLeague = [
  "Tool1H_LC01",
  "Gear_Bldg_LC01",
  "ArmorMed_LC01",
]

const allianceLegionOfCarthage = [
  "ArmorPlt_LC01",
  "ArrowOH_LC01",
  "Gear_LC01",
]

const questRewards = [
  "Spears2H_ALS",
  "Bow1H_UASB",
]

const eventHalloween2018 = [
  "Sword1H_R005_LEG",
]

const eventWinter2018 = [
  "Arrows_IceKing_LEG",
  "Axe2H_IceKing_LEG",
  "Staff2H_IceKing_LEG",
  "Sling2H_IceKing_LEG",
]

const persianStartingGear = [
  "Tool1H_U201",
  "ArmorClth_R201",
  "FishingNet1H_U201",
  "Spear2H_U201",
  "ArmorMed_R201",
  "Spear1H_U201",
  "Shield1H_U201",
  "ArmorClth_R201",
  "Sword1H_U201",
  "ArrowOH_U201_VR",
  "ArmorMed_R201",
  "Bow1H_U201",
  "ArrowOH_U201_VR",
  "ArmorClth_R201",
  "Javalin2H_U201",
  "Shield1H_U201",
  "ArmorClth_R201",
  "Bow1H_U201",
  "ArrowOH_U201_VR",
  "ArmorLgt_R201",
  "Sword1H_U201",
  "Shield1H_U201",
  "ArmorLgt_R201",
  "Spear2H_U201",
  "ArmorLgt_R201",
  "RamHead2H_U201",
  "ArmorPlt_U201",
  "Bow1H_U201",
  "ArmorPlt_U201",
  "Ballista2H_U201_VR",
  "ArmorPlt_U201",
  "Bow1H_U201",
  "ArrowOH_U201_VR",
  "ArmorPlt_U201",
  "RamHead2H_U201",
  "ArmorPlt_U201",
  "Ballista2H_U201_VR",
  "ArmorPlt_U201",
  "Scepter2H_U201",
  "ArmorClth_R201",
  "Bow1H_U201",
  "ArrowOH_U201_VR",
  "ArmorBldg_U201",
  "Bow1H_U201",
  "ArrowOH_U201_VR",
  "ArmorBldg_U201",
  "Bow1H_U201",
  "ArrowOH_U201_VR",
  "ArmorBldg_U201",
  "ArmorBldg_U201",
]

const babylonianStartingGear = [
  "ArmorBldg_U201",
  "Spear2H_U201",
  "ArmorMed_R201",
  "Spear1H_U201",
  "Shield1H_U201",
  "ArmorClth_R201",
  "RamHead2H_U201",
  "ArmorMed_R201",
  "Sword1H_U201",
  "Shield1H_U201",
  "ArmorMed_R201",
  "ArmorBldg_U201",
  "Sling2H_U201",
  "ArmorClth_R201",
  "Bow1H_U201",
  "ArrowOH_U201_VR",
  "ArmorClth_R201",
  "ArmorBldg_U201",
  "Spear2H_U201",
  "ArmorLgt_R201",
  "Bow1H_U201",
  "ArrowOH_U201_VR",
  "ArmorClth_R201",
  "Bow1H_U201",
  "ArrowOH_U201_VR",
  "ArmorLgt_R201",
  "Javalin2H_U201",
  "ArmorLgt_R201",
  "ArmorBldg_U201",
  "RamHead2H_U201",
  "ArrowOH_U201_VR",
  "ArmorPlt_U201",
  "Bow1H_U201",
  "ArrowOH_U201_VR",
  "ArmorBldg_U201",
  "Tool1H_U201",
  "ArmorClth_R201",
  "ArmorClth_R201",
  "ArmorBldg_U201",
  "ArmorBldg_U201",
  "ArmorBldg_U201",
  "FishingNet1H_U201",
  "ArrowOH_U201_VR",
  "ArmorPlt_U201",
  "Bow1H_U201",
  "ArrowOH_U201_VR",
  "ArmorPlt_U201",
  "ArrowOH_U201_VR",
  "ArmorPlt_U201",
  "RamHead2H_U201",
  "ArmorPlt_U201",
  "ArmorBldg_U201",
  "ArmorBldg_U201",
  "ArmorClth_R201",
  "ArmorBldg_U201",
  "ArmorBldg_U201",
  "ArmorBldg_U201",
  "Scepter2H_U201",
  "ArmorClth_R201",
  "Bow1H_U201",
  "ArrowOH_U201_VR",
  "ArmorBldg_U201",
  "Ballista2H_U201_VR",
  "ArmorPlt_U201",
  "ArmorBldg_U201",
  "Sword1H_U201",
  "ArmorLgt_R201",
  "Bow1H_U201",
  "ArrowOH_U201_VR",
  "ArmorBldg_U201",
  "ArmorBldg_U201",
]

const norseStartingGear = [
  "ArmorBldg_U201",
  "Spear2H_U201",
  "ArmorClth_R201",
  "Axe2H_U201",
  "ArmorClth_R201",
  "Axe2H_U201",
  "Shield1H_U201",
  "ArmorMed_R201",
  "Axe2H_U201",
  "ArmorClth_R201",
  "Spear1H_U201",
  "ArmorClth_R201",
  "ArmorBldg_U201",
  "Javalin2H_U201",
  "Shield1H_U201",
  "ArmorClth_R201",
  "Bow1H_U201",
  "ArrowOH_U201_VR",
  "ArmorClth_R201",
  "ArmorBldg_U201",
  "Sword1H_U201",
  "Shield1H_U201",
  "ArmorLgt_R201",
  "Spear2H_U201",
  "ArmorLgt_R201",
  "Bow1H_U201",
  "ArrowOH_U201_VR",
  "ArmorBldg_U201",
  "RamHead2H_U201",
  "ArmorMed_R201",
  "Ballista2H_U201_VR",
  "ArmorMed_R201",
  "ArmorBldg_U201",
  "ArmorBldg_U201",
  "ArmorBldg_U201",
  "FishingNet1H_U201",
  "ArrowOH_U201_VR",
  "ArmorPlt_U201",
  "Bow1H_U201",
  "ArrowOH_U201_VR",
  "ArmorPlt_U201",
  "ArrowOH_U201_VR",
  "ArmorPlt_U201",
  "FireThrower2H_U201",
  "ArmorPlt_U201",
  "ArmorBldg_U201",
  "ArmorBldg_U201",
  "ArmorClth_R201",
  "Bow1H_U201",
  "ArrowOH_U201_VR",
  "ArmorBldg_U201",
  "Tool1H_U201",
  "ArmorClth_R201",
  "ArmorBldg_U201",
  "ArmorBldg_U201",
  "ArmorBldg_U201",
  "Scepter2H_U201",
  "ArmorClth_R201",
  "Axe2H_U201",
  "ArmorMed_R201",
  "Scepter2H_U201",
  "ArmorClth_R201",
  "ArmorBldg_U201",
  "Spear2H_U201",
  "ArmorClth_R201",
  "Sword1H_U201",
  "ArmorClth_R201",
  "Bow1H_U201",
  "ArrowOH_U201_VR",
  "ArmorClth_R201",
  "Bow1H_U201",
  "ArrowOH_U201_VR",
  "ArmorBldg_U201",
]

/**
 * Starting at this ID, all items were created by the celeste team.
 */
const celesteLegendariesStart = 2259

export function isSoldByCyprus(trait: Trait) {
  return cyprusLegendaries.includes(trait.name)
}

export function isSoldByCouncilOfImhotep(trait: Trait) {
  return allianceCouncilOfImhotep.includes(trait.name)
}

export function isSoldByDelianLeague(trait: Trait) {
  return allianceDelianLeague.includes(trait.name)
}

export function isSoldByLegionOfCarthage(trait: Trait) {
  return allianceLegionOfCarthage.includes(trait.name)
}

export function isSoldForCoin(trait: Trait) {
  return isSoldByCyprus(trait)
    || isSoldByCouncilOfImhotep(trait)
    || isSoldByDelianLeague(trait)
    || isSoldByLegionOfCarthage(trait)
}

export function isQuestReward(trait: Trait) {
  return questRewards.includes(trait.name)
}

export function getQuestName(trait: Trait) {
  return quests[trait.name]
}

export function isHalloween2018Reward(trait: Trait) {
  return eventHalloween2018.includes(trait.name)
}

export function isWinter2018Reward(trait: Trait) {
  return eventWinter2018.includes(trait.name)
}

export function isEventReward(trait: Trait) {
  return isHalloween2018Reward(trait)
    || isWinter2018Reward(trait)
}

/**
 * Only legendaries are reforgeable, so we only need to look
 * at a few items.
 */
export function isReforgeable(trait: Trait) {
  return trait.rarity === "legendary"
    && !isSoldForCoin(trait)
    && !isQuestReward(trait)
    && !isEventReward(trait)
}

export function isClassicItem(trait: Trait) {
  return trait.dbid < celesteLegendariesStart
}

export function isPersianStartingGear(trait: Trait) {
  return persianStartingGear.includes(trait.name)
}

export function isBabylonianStartingGear(trait: Trait) {
  return babylonianStartingGear.includes(trait.name)
}

export function isNorseStartingGear(trait: Trait) {
  return norseStartingGear.includes(trait.name)
}

export function isStartingGear(trait: Trait) {
  return isPersianStartingGear(trait)
    || isBabylonianStartingGear(trait)
    || isNorseStartingGear(trait)
}
