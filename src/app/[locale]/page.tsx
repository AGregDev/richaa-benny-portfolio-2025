export const runtime = "edge";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="underline text-lg">Skills</p>
        <ul className="flex flex-col list-disc gap-2 mx-4 my-2">
          <li>Proficiency in creating 3D models using Autodesk Maya.</li>
          <li>Skills in UV mapping and texture painting.</li>
          <li>Experience in creating character rigs for animation.</li>
          <li>
            Strong understanding of keyframe animation, motion capture, and
            principles of animation.
          </li>
          <li>
            Knowledge of lighting techniques and rendering in engines like
            Arnold or Unreal Engine.
          </li>
          <li>
            Skills in post-production compositing using software like After
            Effects.
          </li>
          <li>
            Ability to use Unreal Engine's Blueprint visual scripting to create
            interactive elements and game play mechanics.
          </li>
          <li>
            Ability to troubleshoot technical issues and adapt to challenges
            during the animation process.
          </li>
        </ul>
      </div>
      <div>
        <p className="underline text-lg">Work Experience</p>
        <div className="flex flex-col py-4 mb-6">
          <p className="text-blue-900">Part-time 3D Animator – Diizz Interactive </p>
          <p>October 2023 - July 2024</p>
        </div>
        <ul className="flex flex-col list-disc gap-2 mx-4 my-2">
          <li>Develop 3D product models for seamless integration and placement in video content.</li>
          <li>Control rig creation and implementation including skeletons, skinning, cloth, animation blueprints and retargeting. </li>
          <li>Creating multi-complexity levels in Unreal Engine for environment building with integrated assets.</li>
          <li>
          Convert 3D models into compatible formats for Blender, Autodesk Maya, and Unreal Engine.
          </li>
          <li>
          Utilize Element 3D to seamlessly integrate 3D models into videos edited in After Effects.
          </li>
          <li>
          Enhance videos with cutting, trimming, color grading, sound design, and motion graphics using Premiere Pro and
          After Effects.
          </li>
        </ul>
      </div>
      <div>
        <p className="underline text-lg">Education</p>
        <div className="flex flex-col py-4 mb-6">
          <p className="text-blue-900">Animating walk cycles - Sophoria Academy  </p>
          <p>February 2025 </p>
        </div>
        <div className="flex flex-col py-4 mb-6">
          <p className="text-blue-900">BSc in Animation and Visual Effects - University of Mauritius </p>
          <p>November 2021 - November 2024</p>
        </div>
      </div>
    </div>
  );
}
