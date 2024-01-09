import { Meta, StoryObj } from "@storybook/react";
import FavoriteCarusel2Sm from "./FavoriteCarusel2Sm";
import { IoIosStar } from "react-icons/io";


const meta = {
  title: "components/FavoriteCarusel2Sm",
  component: FavoriteCarusel2Sm,
} as Meta<typeof FavoriteCarusel2Sm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
   slider3:[
    {
      content:(
        <div className=" flex sm:hidden flex-col items-center justify-center gap-4 ">
        <h3>People Are Talking</h3>
        <div>
          <img src="/favoriteImage/image.png" alt="" />
        </div>
        <div className=" flex flex-col gap-2">
  
       <div className=" flex gap-2">
       <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
       </div>
  
          <p>
            “Love this shirt! Fits perfectly and the fabric is thick without being
            stiff.”
          </p>
        </div>
      </div>
      )
    },
    {
      content:(
        <div className=" flex sm:hidden flex-col items-center justify-center gap-4 ">
        <h3>People Are Talking</h3>
        <div>
          <img src="/favoriteImage/image.png" alt="" />
        </div>
        <div className=" flex flex-col gap-2">
  
       <div className=" flex gap-2">
       <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
       </div>
  
          <p>
            “Love this shirt! Fits perfectly and the fabric is thick without being
            stiff.”
          </p>
        </div>
      </div>
      )
    },
    {
      content:(
        <div className=" flex sm:hidden flex-col items-center justify-center gap-4 ">
        <h3>People Are Talking</h3>
        <div>
          <img src="/favoriteImage/image.png" alt="" />
        </div>
        <div className=" flex flex-col gap-2">
  
       <div className=" flex gap-2">
       <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
       </div>
  
          <p>
            “Love this shirt! Fits perfectly and the fabric is thick without being
            stiff.”
          </p>
        </div>
      </div>
      )
    }
  ]
  }
};
