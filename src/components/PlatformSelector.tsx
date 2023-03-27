import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGame";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectedPlatform: (value: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data } = usePlatforms();

  if (!data) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectedPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
