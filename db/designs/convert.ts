import { Design as ApiDesign } from "celeste-api-types"

import { API, downloadIcon } from "../download"
import { Design } from "../interfaces"
import { convertRecipeSchool } from "../items/convert-recipe-school"
import { translateEn } from "../shared/convert-text"
import { findVendors } from "../vendors"

import { convertMaterials } from "./convert-materials"
import { buildSearchString } from "./search"

export async function convertDesign(design: ApiDesign): Promise<Design> {
  const allTraits = await API.getTraits()
  const allMats = await API.getMaterials()

  const description = await translateEn(design.rollovertextid, "")
  const icon = await downloadIcon(`Art/${design.icon}`, "designs")
  const rarity = design.rarity.replace("cRarity", "").toLowerCase()
  const materials = convertMaterials(design)
  const type = Object.keys(design.output)[0]
  const school = description.replace(/Use: Grants an? (.+?) the ability to create .+/, "$1")

  const output = design.output[type]
  const outputId = output.id
  const outputDetails: any = allTraits[outputId] || allMats[outputId]
  const outputName = await translateEn(outputDetails.displaynameid, outputDetails.name)
  const outputIcon = await downloadIcon(`Art/${outputDetails.icon}`, "designs")

  const result: Design = {
    id: design.name,
    description,
    icon,
    rarity,
    school,
    materials,
    vendors: undefined,
    marketplace: [],
    outputId,
    outputName,
    outputIcon,
    search: "",
  }

  result.vendors = await findVendors(result.id)
  result.search = await buildSearchString(result, design)
  result.marketplace.push({ id: result.id })

  return result
}
