from PIL import Image

# List your frame file paths in order
frame_paths = [
    'assets/animation-1/actual_middle.png',
    'assets/animation-1/IMG_1652.png',
    'assets/animation-1/IMG_1653.png',
    'assets/animation-1/bottom.png',
    'assets/animation-1/IMG_1653.png',
    'assets/animation-1/IMG_1652.png',
    'assets/animation-1/actual_middle.png',
    'assets/animation-1/middle.png',
    'assets/animation-1/IMG_1649.png',
    'assets/animation-1/IMG_1648.png',
    'assets/animation-1/IMG_1647.png',
    'assets/animation-1/IMG_1646.png',
    'assets/animation-1/top.png',
    'assets/animation-1/top.png',
    'assets/animation-1/IMG_1646.png',
    'assets/animation-1/IMG_1647.png',
    'assets/animation-1/IMG_1648.png',
    'assets/animation-1/IMG_1649.png',
    'assets/animation-1/middle.png',
    'assets/animation-1/actual_middle.png',
    'assets/animation-1/IMG_1652.png',
    'assets/animation-1/actual_middle.png',
]

# Load and optionally resize all frames
target_size = (1000, 1000)  # Desired size per frame (width, height)

frames = [Image.open(fp).convert("RGBA").resize(target_size, Image.Resampling.NEAREST) for fp in frame_paths]

# Create a new empty sprite sheet
sheet_width = target_size[0] * len(frames)
sheet_height = target_size[1]
sprite_sheet = Image.new("RGBA", (sheet_width, sheet_height))

# Paste each frame side by side
for index, frame in enumerate(frames):
    sprite_sheet.paste(frame, (index * target_size[0], 0))

# Save the sprite sheet
output_path = "sprite_sheet.png"
sprite_sheet.save(output_path)

print(f"Sprite sheet saved at {output_path}")
